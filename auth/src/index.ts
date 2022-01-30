import express, { Router } from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import routing from './routes';
import { errorHandler } from './middleware/error-handler';
import mongoose from 'mongoose';
import { DatabaseConnectionError } from './errors/database-connection-errors';

const app = express();

app.use(json());
routing(app);
app.use(errorHandler);

const start = async () => {
  try {
    mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
    console.log('Connected to mongo db');
  } catch (error) {
    console.log(error);
    throw new DatabaseConnectionError();
  }
  app.listen(3000, () => {
    console.log('auth listening on Port 3000');
  });
};

start();
