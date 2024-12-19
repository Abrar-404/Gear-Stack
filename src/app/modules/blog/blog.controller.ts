import { Request, Response } from 'express';
import { CatchAsync } from '../../utils/CatchAsync';
import { blogService } from './blog.service';
import { sendResponse } from '../../utils/sendResponse';

const createBlog = CatchAsync(async (req: Request, res: Response) => {
  const result = await blogService.createBlogIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'Blog Created successfully',
    statusCode: 201,
    data: result,
  });
});

export const blogController = {
  createBlog,
};
