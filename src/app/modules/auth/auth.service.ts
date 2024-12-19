import { Error } from 'mongoose';
import { UserModel } from '../user/user.model';
import { iAuth } from './auth.interface';
import config from '../../config';
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const loginUser = async (payload: iAuth) => {
  const userData = await UserModel.findOne({ email: payload.email });
  const user = await UserModel.isUserExists(payload.email);
  const verifyPassword = await UserModel.verifyPassword(
    payload?.password,
    user?.password,
  );

  if (!userData) {
    throw new Error('User does not exist');
  }

  if (!user) {
    throw new Error('User not exists');
  }

  const blocked = user?.isBlocked;

  if (blocked === true) {
    throw new Error('User is blocked');
  }

  if (!verifyPassword) {
    throw new Error('Password does not match');
  }

  const jwtPayload = {
    userEmail: user?.email,
    role: user?.role,
  };

  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: '10d',
  });

  return {
    accessToken,
  };
};

export const authService = {
  loginUser,
};
