import { HttpStatusClientError } from "./error.const";
import CustomError from "./error.custom-error";

export class AlreadyExistsError extends CustomError {
    constructor(resourceName: string) {
        super( `Resource ${resourceName} already exists`, true, HttpStatusClientError.CONFLICT);
        this.name = 'AlreadyExistsError';
    }
}