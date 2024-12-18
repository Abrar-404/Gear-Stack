import { Router } from 'express';
import userRouter from '../modules/user/user.routes';
import blogRouter from '../modules/blog/blog.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/blogs',
    route: blogRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
