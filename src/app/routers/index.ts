import { Router } from 'express';
import userRouter from '../modules/user/user.routes';
import blogRouter from '../modules/blog/blog.routes';
import authRouter from '../modules/auth/auth.routes';
import adminRouter from '../modules/admin/admin.routes';

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
  {
    path: '/auth',
    route: authRouter,
  },
  {
    path: '/admin',
    route: adminRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
