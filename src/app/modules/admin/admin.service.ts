import { UserModel } from '../user/user.model';

const blockUserFromDB = async (id: any) => {
  const result = await UserModel.findByIdAndUpdate(id, {
    isBlocked: true,
  });
  return result;
};

export const adminService = {
  blockUserFromDB,
};
