import { iAuth } from './auth.interface';

const loginUser = async (payload: iAuth) => {
  console.log(payload);
  return {};
};

export const authService = {
  loginUser,
};
