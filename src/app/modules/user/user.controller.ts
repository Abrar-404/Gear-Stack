import { Request, Response } from 'express';
import { userService } from './user.service';
import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';

const createUser = CatchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'User Registered successfully',
    statusCode: 201,
    data: result,
  });
});

export const userController = {
  createUser,
};
