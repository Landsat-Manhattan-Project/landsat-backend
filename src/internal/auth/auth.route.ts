import { Router } from "express";
import { login, signUp } from "./auth.controller";
import Container from "typedi";
import { LoggerService } from "../shared/logger/logger.service";

const router = Router();

const logger = Container.get(LoggerService);
logger.log("[POST] .../login route loaded");
router.post('/login', login);

logger.log("[POST] .../signup route loaded");
router.post('/signup', signUp);

export { router as authRoutes };