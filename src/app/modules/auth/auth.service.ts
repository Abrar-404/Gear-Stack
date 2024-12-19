import { UserModel } from '../user/user.model';
import { iAuth } from './auth.interface';
import { AppError } from './../../errors/AppErrors';
const bcrypt = require('bcrypt');

const loginUser = async (payload: iAuth) => {
  const isUserExists = await UserModel.findOne({ id: payload.id });

  if (!isUserExists) {
    throw new AppError(404, 'User does not exist', '');
  }

  const isBlocked = isUserExists?.isBlocked;

  if (isBlocked === true) {
    throw new AppError(404, 'User Is Blocked', '');
  }

  const isPasswordCorrect = await bcrypt.compare(
    payload?.password,
    isUserExists?.password,
  );
  console.log(isPasswordCorrect);
  return {};
};

export const authService = {
  loginUser,
};
