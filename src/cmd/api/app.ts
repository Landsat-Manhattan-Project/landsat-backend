import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import 'express-async-errors'
import { healthRoutes } from '../../internal/health/health.route';
import { routesV1 } from './route/route.v1';
import { errorHandler } from '../../internal/shared/error/error.middleware';
import { LoggerService } from '../../internal/shared/logger/logger.service';
import Container from 'typedi';

export const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan('dev'));

const logger = Container.get(LoggerService);
logger.log("Loading routes for /api");
app.use('/api/', healthRoutes);

logger.log("Loading routes for /api/v1");
app.use('/api/v1', routesV1);

app.use(errorHandler);

