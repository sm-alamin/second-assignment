import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import { userRouter } from './app/modules/user/user.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/users',userRouter);

const getAController = (req: Request, res: Response) => {
  const success = "Welcome,to our user management app";
  res.send(success);
};

app.get('/', getAController);

export default app;
