import { UserModel } from './user.model';
import { iUser } from './user.interface';

const createUserIntoDB = async (payload: iUser): Promise<iUser> => {
  const result = await UserModel.create(payload);
  return result;
};

export const userService = {
  createUserIntoDB,
};
