import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { healthRoutes } from '../../internal/health/health.route';
import { routesV1 } from './route/route.v1';
import { errorHandler } from '../../internal/shared/error/error.middleware';

export const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/', healthRoutes);
app.use('/api/v1', routesV1);

app.use(errorHandler);

