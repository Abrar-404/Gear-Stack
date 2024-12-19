import { Schema, model } from 'mongoose';
import { iUser, userModel } from './user.interface';
import config from '../../config';
const bcrypt = require('bcrypt');

const userModel = new Schema<iUser, userModel>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

userModel.pre('save', async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userModel.post('save', async function (doc, next) {
  doc.password = '';
  next();
});

userModel.statics.isUserExists = async function (id: string) {
  const result = await UserModel.findOne({ id });
  return result;
};

userModel.statics.isBlocked = async function (id: string) {
  const user = await this.isUserExists(id);
  if (user && user.isBlocked) {
    throw new Error('User is blocked');
  }
  return user;
};

userModel.statics.verifyPassword = async function (plainPass, hashPass) {
  return await bcrypt.compare(plainPass, hashPass);
};

export const UserModel = model<iUser, userModel>('UserModel', userModel);
