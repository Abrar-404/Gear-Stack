import { Router } from 'express';
import userRouter from '../modules/user/user.routes';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: userRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
