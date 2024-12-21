import { Request, Response } from 'express';
import { userService } from './user.service';
import { CatchAsync } from '../../utils/CatchAsync';
import { sendResponse } from '../../utils/sendResponse';
import { Types, Schema } from 'mongoose';

const createUser = CatchAsync(async (req: Request, res: Response) => {
  const result = await userService.createUserIntoDB(req.body);
  sendResponse(res, {
    success: true,
    message: 'User Registered successfully',
    statusCode: 201,
    data: {
      _id: Schema.Types.ObjectId,
      email: result.email,
      name: result.name,
    },
  });
});

const getUser = CatchAsync(async (req: Request, res: Response) => {
  console.log('test', req.user);
  const result = await userService.getUserFromDB();
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});



export const userController = {
  createUser,
  getUser,
};
