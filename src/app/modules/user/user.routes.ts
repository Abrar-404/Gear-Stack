import { Router } from 'express';
import { userController } from './user.controller';
import { Auth } from '../../middlewares/auth';

const userRouter = Router();

userRouter.post('/register', userController.createUser);
userRouter.get('/', Auth(), userController.getUser);

export default userRouter;
