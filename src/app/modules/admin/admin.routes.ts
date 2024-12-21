import { Router } from 'express';
import { adminController } from './admin.controller';

const adminRouter = Router();

adminRouter.post('/users/:userId/block', adminController.blockUser);

export default adminRouter;
