import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { LoggerService } from '../logger/logger.service';

export const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  const logger = Container.get(LoggerService);
  logger.error(`Error: ${err.message}`);
  res.status(500).json({ error: 'Internal Server Error' });
};
