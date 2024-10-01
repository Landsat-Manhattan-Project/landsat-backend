import { Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import { ErrorHandler } from './error.handler';
import CustomError from './error.custom-error';

export const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const errorHandler = Container.get(ErrorHandler);
    errorHandler.handleError(err);
    if (errorHandler.isTrustedError(err)) {
        const castedCustomError = err as CustomError;
        return res.status(castedCustomError.statusHttp).json({ error: err.message });
    }
    return res.status(500).json({ error: 'Internal Server Error' });
};
