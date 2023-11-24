import { z } from 'zod';
import { fullNameSchema, addressSchema, orderSchema } from './user.validation';

export const fullNameSchema = z.object({
  firstName: z.string().min(1), 
  lastName: z.string().min(1),
});

export const addressSchema = z.object({
  street: z.string().min(1),
  city: z.string().min(1),
  country: z.string().min(1),
});

export const orderSchema = z.array(
    z.object({
      productName: z.string().min(1),
      price: z.number().min(0),
      quantity: z.number().min(1),
    })
  );

const userValidationSchema = z.object({
    userId: z.number().int(),
    username: z.string().min(1),
    password: z.string().min(6),
    fullName: fullNameSchema,
    age: z.number().min(0),
    email: z.string().email(),
    isActive: z.boolean(),
    hobbies: z.array(z.string().min(1)),
    address: addressSchema,
    orders: orderSchema,
  });
export default userValidationSchema;
