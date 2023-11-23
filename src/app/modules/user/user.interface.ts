import { Schema, model, connect} from 'mongoose';

export type FullName = {
    firstName: string;
    lastName: string;
  };
  
export  type Address = {
    street: string;
    city: string;
    country: string;
  };
  
export type Order = {
    productName: string;
    price: number;
    quantity: number;
  };
  

  //main interface
 export type User = {
    userId: string;
    username: string;
    password: string;
    fullName: FullName;
    age: number;
    email: string;
    isActive: 'Active'| 'Inactive';
    hobbies: string[];
    address: Address;
    orders: Order[];
  };
  