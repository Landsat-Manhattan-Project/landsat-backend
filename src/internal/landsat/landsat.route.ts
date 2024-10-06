import { Router } from "express";
import { authUser } from "../auth/auth.middleware";
import { reminderLandsat } from "./landsat.controller";
import Container from "typedi";
import { LoggerService } from "../shared/logger/logger.service";

const router = Router();
const logger = Container.get(LoggerService);

logger.log("[POST] .../landsat/reminder route loaded");
router.post('/landsat/reminder', authUser, reminderLandsat);

export { router as landsatRoutes };