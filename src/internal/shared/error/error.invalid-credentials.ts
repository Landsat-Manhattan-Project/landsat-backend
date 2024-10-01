import { HttpStatusClientError } from "./error.const";
import CustomError from "./error.custom-error";

export class InvalidCredentialsError extends CustomError {
    constructor() {
        super('Invalid credentials', true, 
            HttpStatusClientError.UNAUTHORIZED);
        this.name = 'InvalidCredentialsError';
    }
}