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
    if (result === null) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }
    res.status(200).json({
        success: true,
        message: 'Users are  retrieve successfully',
        data: result,
      });
} catch (error) {
    console.log(error)
}
}
const getSingleUser = async (req: Request, res:Response) => {
try {
    const {userId} = req.params;
    const userIdNumber = parseInt(userId)
    const result = await userServices.getSingleUserFromDB(userIdNumber);
    
    res.status(200).json({
        success: true,
        message: 'Single User is  retrieve successfully',
        data: result,
      });
} catch (error) {
    console.log(error)
}
}

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNumber = parseInt(userId);
    const updatedUserData = req.body;
    const result = await userServices.updateUserIntoDB(userIdNumber, updatedUserData);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNumber = parseInt(userId);

    const result = await userServices.deleteUserFromDB(userIdNumber);

    if (!result) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};
export const userController = {
    createUser,
    getAlUsers,
    getSingleUser,
    updateUser,
    deleteUser,
}
