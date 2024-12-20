import { Schema, model } from 'mongoose';
import { iBlog } from './blog.interface';

const blogModel = new Schema<iBlog>({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'UserModel',
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const BlogModel = model<iBlog>('Blog', blogModel);
