import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    // id: z.string({ required_error: 'Id is required' }),
    email: z.string({ required_error: 'Email is required' }),
    password: z.string({ required_error: 'Password is required' }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
