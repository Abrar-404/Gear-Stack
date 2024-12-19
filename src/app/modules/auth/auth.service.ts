import { Error } from 'mongoose';
import { UserModel } from '../user/user.model';
import { iAuth } from './auth.interface';
const bcrypt = require('bcrypt');

const loginUser = async (payload: iAuth) => {
  const user = await UserModel.isUserExists(payload.id);

  if (!user) {
    throw new Error('User does not exist');
  }

  const blocked = user?.isBlocked;

  if (blocked === true) {
    throw new Error('User is blocked');
  }

  if (!(await UserModel.verifyPassword(payload?.password, user?.password)))
    throw new Error('Password is incorrect');
};

export const authService = {
  loginUser,
};
