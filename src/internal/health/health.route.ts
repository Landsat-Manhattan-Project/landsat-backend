import { Router } from 'express';
import { healthCheck } from './health.controller';
import Container from 'typedi';
import { LoggerService } from '../shared/logger/logger.service';

const router = Router();
const logger = Container.get(LoggerService);
logger.log("[GET] .../health route loading");
router.get('/health', healthCheck);


export { router as healthRoutes };
