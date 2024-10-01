import express from 'express';
import { authRoutes } from '../../../internal/auth/auth.route';
import Container from 'typedi';
import { LoggerService } from '../../../internal/shared/logger/logger.service';

const router = express.Router();

const logger = Container.get(LoggerService);
logger.log(".../auth routes loading");
router.use('/auth', authRoutes);

export { router as routesV1 };