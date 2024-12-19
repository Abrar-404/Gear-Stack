import { Router } from 'express';
import { blogController } from './blog.controller';

const blogRouter = Router();

blogRouter.post('/', blogController.createBlog);
blogRouter.get('/', blogController.getAllBlogs);

export default blogRouter;
