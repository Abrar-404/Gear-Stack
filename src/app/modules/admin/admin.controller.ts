import { Request, Response } from 'express';
import { CatchAsync } from '../../utils/CatchAsync';
import { adminService } from './admin.service';
import { sendResponse } from '../../utils/sendResponse';

const blockUser = CatchAsync(async (req: Request, res: Response) => {
  const result = await adminService.blockUserFromDB(req.params.userId);
  console.log(result);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: 'User Blocked successfully',
    data: result,
  });
});

export const adminController = {
  blockUser,
};
