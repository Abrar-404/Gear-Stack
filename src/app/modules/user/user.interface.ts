import { Model } from 'mongoose';
import { USER_ROLE } from './user.constants';

export interface iUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface userModel extends Model<iUser> {
  isUserExists(email: string): Promise<iUser>;
  isBlocked(email: string): Promise<iUser>;

  verifyPassword(plainPass: string, hashPass: string): Promise<boolean>;
}

export type tUserRole = keyof typeof USER_ROLE;
