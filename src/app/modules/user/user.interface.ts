import { Model } from 'mongoose';

export interface iUser {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'user';
  isBlocked: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface userModel extends Model<iUser> {
  isUserExists(id: string): Promise<iUser>;
  isBlocked(id: string): Promise<iUser>;

  verifyPassword(plainPass: string, hashPass: string): Promise<boolean>;
}
