import { Router } from 'express';
import { blogController } from './blog.controller';

const blogRouter = Router();

blogRouter.post('/', blogController.createBlog);
blogRouter.get('/',  blogController.getAllBlogs);
blogRouter.get('/:id', blogController.getSingleBlog);
blogRouter.put('/:id', blogController.updateBlogs);
blogRouter.delete('/:id', blogController.deleteBlogs);

export default blogRouter;
