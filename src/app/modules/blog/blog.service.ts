import { iBlog } from './blog.interface';
import { BlogModel } from './blog.model';

const createBlogIntoDB = async (payload: iBlog): Promise<iBlog> => {
  const result = await BlogModel.create(payload);
  return result;
};

export const blogService = {
  createBlogIntoDB,
};
