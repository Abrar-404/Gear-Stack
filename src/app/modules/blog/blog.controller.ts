import { Request, Response } from 'express';
const { status } = require('http-status');
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

const getAllBlogs = CatchAsync(async (req, res) => {
  const result = await blogService.getAllBlogsFromDB(req.query);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'Blogs fetched successfully',
    data: result,
  });
});

const getSingleBlog = CatchAsync(async (req, res) => {
  const payload = req.params.id;
  const result = await blogService.getSingleBlogFromDB(payload);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Blog fetched successfully',
    data: result,
  });
});

const updateBlogs = CatchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  const result = await blogService.updateBlogsFromDB(id, payload);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Blog updated successfully',
    data: result,
  });
});

const deleteBlogs = CatchAsync(async (req, res) => {
  const payload = req.params.id;
  const result = await blogService.deleteBlogsFromDB(payload);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Blog deleted successfully',
    data: result,
  });
});

export const blogController = {
  createBlog,
  getAllBlogs,
  updateBlogs,
  getSingleBlog,
  deleteBlogs,
};
