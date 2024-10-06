import 'reflect-metadata';
import Container from 'typedi';
import { LoggerService } from '../internal/shared/logger/logger.service';
import { config } from '../internal/config/config.env';
import { app } from './api/app';
import { DatabaseService } from '../internal/config/config.db';
import { ErrorHandler } from '../internal/shared/error/error.handler';
import { MailService } from '../internal/notification/mail/mail.service';

const logger = Container.get(LoggerService);
const PORT = config.port;

const dbService = Container.get(DatabaseService);
dbService.connect();

const _ = Container.get(MailService);

app.listen(PORT, () => {
    logger.log(`Server started on port ${PORT}`);
});

process.on('unhandledRejection', (err: Error) => {
    logger.warn('Unhandled rejection from promise with error: ' + err.name + ':' + err.message);
    throw err
});

process.on('uncaughtException', (err) => {
    logger.warn('Uncaught exception with error: ' + err.name + ':' + err.message);
    const errorHandler = Container.get(ErrorHandler);
    errorHandler.handleError(err);
    process.exit(1);
});