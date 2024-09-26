import 'reflect-metadata';
import Container from 'typedi';
import { LoggerService } from '../internal/shared/logger/logger.service';
import { config } from '../internal/config/config.env';
import { app } from './api/app';
import { DatabaseService } from '../internal/config/config.db';

const logger = Container.get(LoggerService);
const PORT = config.port;

const dbService = Container.get(DatabaseService);
dbService.connect();

app.listen(PORT, () => {
    logger.log(`Server started on port ${PORT}`);
});