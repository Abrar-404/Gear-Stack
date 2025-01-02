import { UserModel } from './user.model';
import { iUser } from './user.interface';
import { iAuth } from '../auth/auth.interface';

const createUserIntoDB = async (payload: iUser): Promise<iUser> => {
  const result = await UserModel.create(payload);
  return result;
};

const getUserFromDB = async () => {
  const result = await UserModel.find();
  return result;
};


export const userService = {
  createUserIntoDB,
  getUserFromDB,
};
