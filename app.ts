import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import routes from './src/routes/imageRoute';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api',routes);

app.get('/', (req: Request, res: Response): void => {
  res.send('Welcome to start enter the name, hight and width of image as follow /api/images?filename=fjord&width=00&height=00');
});

export default app;