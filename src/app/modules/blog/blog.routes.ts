import { Router } from 'express';
import { blogController } from './blog.controller';

const blogRouter = Router();

blogRouter.post('/', blogController.createBlog);
blogRouter.get('/', blogController.getAllBlogs);
blogRouter.get('/:id', blogController.getSingleBlog);
blogRouter.put('/:id', blogController.updateBlogs);

export default blogRouter;
