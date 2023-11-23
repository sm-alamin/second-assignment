import { Schema, model, connect} from 'mongoose';
import { Address, FullName, Order, User } from './user.interface';


//Sub Schemas
const fullNameSchema = new Schema<FullName>({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  });
  
  const addressSchema = new Schema<Address>({
    street: { type: String, required: true },
    city: { type: String, required: true },
    country: { type: String, required: true },
  });
  
  const orderSchema = new Schema<Order>({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
  });
// Main Schema
const userSchema = new Schema<User>({
    userId: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    fullName: { type: fullNameSchema, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    isActive: { type: Boolean, required: true },
    hobbies: { type: [String], required: true },
    address: { type: addressSchema, required: true },
    orders: { type: [orderSchema], required: true },
  });


  const User = model<User>('User', userSchema)