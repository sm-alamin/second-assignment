import { Request, Response } from 'express';
import { userServices } from './user.service';
import userValidationSchema from './user.validation';



const createUser = async (req: Request, res: Response) => {
  try {
    const  userData  = req.body;
    const validatedUser = userValidationSchema.parse(userData);
    const result = await userServices.createUserIntoDB(validatedUser);

    res.status(200).json({
      success: true,
      message: 'User is  created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success: false,
      message: 'Validation failed',
      error: {
        code: 400,
        description: 'Validation failed',
      },
    });
  }
};
const getAlUsers = async (req: Request, res:Response) => {
try {
    const result = await userServices.getAllUsersFromDB();
    if (!result) {
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


const addOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNumber = parseInt(userId);
    const orderData = req.body;

    const user = await userServices.getSingleUserFromDB(userIdNumber);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    if (!user.orders) {
      user.orders = [];
    }

    user.orders.push(orderData);
    await user.save();

    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: null,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: {
        code: 500,
        description: 'Internal Server Error',
      },
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNumber = parseInt(userId);

    const user = await userServices.getSingleUserFromDB(userIdNumber);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    const orders = user.orders || [];

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: {
        orders,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: {
        code: 500,
        description: 'Internal Server Error',
      },
    });
  }
};

const calculateTotalPrice = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const userIdNumber = parseInt(userId);

    const user = await userServices.getSingleUserFromDB(userIdNumber);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }

    const orders = user.orders || [];
    const totalPrice = orders.reduce((total, order) => total + order.price * order.quantity, 0);

    res.status(200).json({
      success: true,
      message: 'Total price calculated successfully!',
      data: {
        totalPrice,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: {
        code: 500,
        description: 'Internal Server Error',
      },
    });
  }
};


export const userController = {
    createUser,
    getAlUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addOrder,
    getAllOrders,
    calculateTotalPrice,
}
