// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import errorHandler from './middlewares/errorHandler';

const app: Application = express();

// Middlewares globales
app.use(cors());
app.options('*', cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

// Middleware de manejo de errores
app.use(errorHandler);
app.get('/', (_req, res) => {
  res.send('Api Itp');
});
export default app;
