import { Request, Response } from 'express';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await userServices.createUserIntoDB(userData);

    res.status(200).json({
      success: true,
      message: 'User is  created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error)
  }
};
const getAlUsers = async (req: Request, res:Response) => {
try {
    const result = await userServices.getAllUsersFromDB();
    res.status(200).json({
        success: true,
        message: 'Users are  retrieve successfully',
        data: result,
      });
} catch (error) {
    console.log(error)
}
}
export const userController = {
    createUser,
    getAlUsers,
}
