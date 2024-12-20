import { Router } from 'express';
import { blogController } from './blog.controller';
import { Auth } from './../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';

const blogRouter = Router();

blogRouter.post('/', Auth(USER_ROLE.USER), blogController.createBlog);
blogRouter.get('/', blogController.getAllBlogs);
blogRouter.get('/:id', blogController.getSingleBlog);
blogRouter.put('/:id', blogController.updateBlogs);
blogRouter.delete('/:id', blogController.deleteBlogs);

export default blogRouter;
