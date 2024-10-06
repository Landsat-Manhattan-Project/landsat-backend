import { Request, Response } from 'express';
import { Container } from 'typedi';
import { HealthService } from './health.service';

export const healthCheck = async (_req: Request, res: Response) => {
  const healthService = Container.get(HealthService);
  
  const status = await healthService.checkHealth();
  if (status.healthy) {
    return res.status(200).json({ status: 'UP', db_connection: status.dbConnection, email_status: status.emailStatus });
  } else {
    return res.status(500).json({ status: 'DOWN', db_connection: status.dbConnection, email_status: status.emailStatus });
  }
};
