import { Router } from "express";
import { LoggerService } from "../shared/logger/logger.service";
import Container from "typedi";
import { addCoordinates } from "./coordinate.controller";
import { authUser } from "../auth/auth.middleware";

const router = Router();

const logger = Container.get(LoggerService);
logger.log("[GET] .../coordinates route loaded");
router.post('/coordinates', authUser, addCoordinates);

export { router as coordinateRoutes };