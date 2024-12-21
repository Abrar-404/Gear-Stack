import { Router } from 'express';
import { adminController } from './admin.controller';
import { Auth } from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constants';

const adminRouter = Router();

adminRouter.post(
  '/users/:userId/block',
  Auth(USER_ROLE.ADMIN),
  adminController.blockUser,
);

export default adminRouter;
