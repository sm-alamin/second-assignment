import { User } from './user.interface';
import { UserModel } from './user.model';


const createUserIntoDB = async (user: User) => {
  
  const result = await UserModel.create(user);
  return result;
};

const getAllUsersFromDB = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUserFromDB = async (userId: number) => {
  const result = await UserModel.findOne({ userId });
  return result;
};

const updateUserIntoDB = async (userId: number, updatedUserData: User) => {
  const result = await UserModel.findOneAndUpdate({ userId }, updatedUserData, {
    new: true,
  });
  return result;
};
const deleteUserFromDB = async (userId: number) => {
  const result = await UserModel.findOneAndDelete({ userId });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUsersFromDB,
  getSingleUserFromDB,
  updateUserIntoDB,
  deleteUserFromDB,
};
