import { Schema } from "mongoose";
import { iUser } from "./user.interface";

const userModel = new Schema<iUser>({
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
})