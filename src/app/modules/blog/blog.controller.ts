import { Request, Response } from 'express';
import { CatchAsync } from '../../utils/CatchAsync';
import { blogService } from './blog.service';

const createBlog = CatchAsync(async (req: Request, res: Response) => {
  const result = await blogService.createBlogIntoDB(req.body);
  res.status(200).json({
    success: true,
    message: 'Blog Created successfully',
    statusCode: 201,
    data: result,
  });
});

export const blogController = {
  createBlog,
};
