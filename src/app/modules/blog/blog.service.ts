import { iBlog } from './blog.interface';
import { BlogModel } from './blog.model';
import { Types } from 'mongoose';

const createBlogIntoDB = async (payload: iBlog): Promise<iBlog> => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  const searchableFields = ['title'];

  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  if (query?.author) {
    const authorId = query.author as string;
    if (Types.ObjectId.isValid(authorId)) {
      queryObj.author = new Types.ObjectId(authorId);
    } else {
      throw new Error('Invalid author ID');
    }
  }

  const searchQuery = BlogModel.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeField = ['searchTerm'];
  excludeField.forEach((el) => delete queryObj[el]);

  const result = await searchQuery.find(queryObj);
  return result;
};

export const blogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};

