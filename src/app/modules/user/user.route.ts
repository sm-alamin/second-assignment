import express from 'express';
import { userController } from './user.controller';

const router = express.Router();

router.post('/create-user', userController.createUser);
router.get('/', userController.getAlUsers);
router.get('/:userId', userController.getSingleUser);
router.put('/:userId', userController.updateUser);
router.delete('/:userId', userController.deleteUser);

router.put('/:userId/orders', userController.addOrder);
router.get('/:userId/orders', userController.getAllOrders);
router.get('/:userId/orders/total-price', userController.calculateTotalPrice);

export const userRouter = router;