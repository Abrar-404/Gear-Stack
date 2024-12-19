import { Router } from 'express';
import { validateRequest } from '../../middlewares/validateRequest';
import { AuthValidation } from './auth.validation';
import { authController } from './auth.controller';

const authRouter = Router();

authRouter.post(
  '/login', validateRequest(AuthValidation.loginValidationSchema),
  authController.loginUser,
);

export default authRouter;
