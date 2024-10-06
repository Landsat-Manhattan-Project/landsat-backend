import express from 'express';
import { authRoutes } from '../../../internal/auth/auth.route';
import Container from 'typedi';
import { LoggerService } from '../../../internal/shared/logger/logger.service';
import { coordinateRoutes } from '../../../internal/coordinate/coordinate.route';
import { landsatRoutes } from '../../../internal/landsat/landsat.route';

const router = express.Router();

const logger = Container.get(LoggerService);
logger.log(".../auth routes loading");
router.use('/auth', authRoutes);

router.use(coordinateRoutes)
router.use(landsatRoutes)

export { router as routesV1 };