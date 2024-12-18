import { Request, Response } from 'express';
import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { authService } from './auth.service';

const loginUser = CatchAsync(async (req: Request, res: Response) => {
  const result = await authService.loginUser(req.body);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User login successfully',
    data: result,
  });
});

export const authController = {
  loginUser,
};
