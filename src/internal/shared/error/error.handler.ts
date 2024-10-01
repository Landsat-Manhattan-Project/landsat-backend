import { Service } from "typedi";
import { LoggerService } from "../logger/logger.service";
import CustomError from "./error.custom-error";

@Service()
export class ErrorHandler {
    constructor(private logger: LoggerService) {}

    handleError(err: Error) {
        this.logError(err);
    }

    isTrustedError(err: Error) {
        if (err instanceof CustomError) {
            return err.isOperational;
        }
        return false;
    }

    logError(err: Error) {
        this.logger.error(`Error: 
            NAME: ${err.name} 
            MESSAGE: ${err.message} 
            STACK: ${err.stack} `);
    }
}