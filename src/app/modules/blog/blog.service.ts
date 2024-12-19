import { iBlog } from './blog.interface';
import { BlogModel } from './blog.model';
import { Types } from 'mongoose';

const createBlogIntoDB = async (payload: iBlog): Promise<iBlog> => {
  const result = await BlogModel.create(payload);
  return result;
};

const getAllBlogsFromDB = async (query: Record<string, unknown>) => {

  let searchTerm = '';
  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }

  const result = await BlogModel.find({
    $or: ['title'].map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });
  return result;
};

export const blogService = {
  createBlogIntoDB,
  getAllBlogsFromDB,
};
