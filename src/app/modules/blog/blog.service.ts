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

  let search = '';
  if (query?.search) {
    search = query?.search as string;
  }

  if (query?.filter) {
    const authorId = query.filter as string;
    if (Types.ObjectId.isValid(authorId)) {
      queryObj.author = new Types.ObjectId(authorId);
    } else {
      throw new Error('Invalid author ID');
    }
  }

  const searchQuery = BlogModel.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: search, $options: 'i' },
    })),
  });

  const excludeField = ['search', 'sortBy', 'sortOrder', 'filter'];
  excludeField.forEach((el) => delete queryObj[el]);

  const filterQuery = searchQuery.find(queryObj);

  let sortBy = '-createdAt';
  if (query.sortBy) {
    sortBy = query.sortBy as string;
  }

  let sortOrder = -1;
  if (query?.sortOrder && query.sortOrder === 'asc') {
    sortOrder = 1;
  }
  const sortQuery = filterQuery.sort({
    [sortBy]: sortOrder as 1 | -1,
  });

  return sortQuery;
};

const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

const updateBlogsFromDB = async (id: string, payload: Partial<iBlog>) => {
  const result = await BlogModel.findByIdAndUpdate(id, payload, { new: true });

  return result;
};

const deleteBlogsFromDB = async (id: string) => {
  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};
export const blogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
  updateBlogsFromDB,
  getSingleBlogFromDB,
  deleteBlogsFromDB,
};
