import { Request, Response } from 'express';
import { userService } from './user.service';
import { CatchAsync } from '../../utils/CatchAsync';

const createUser = CatchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);
  res.status(200).json({
    success: true,
    message: 'User Registered successfully',
    statusCode: 201,
    data: result,
  });
});

export const userController = {
  createUser,
};
