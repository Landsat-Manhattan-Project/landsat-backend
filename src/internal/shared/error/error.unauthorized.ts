import { HttpStatusErrorResponse } from "./error.const";
import CustomError from "./error.custom-error";

export class UnauthorizedError extends CustomError {
    constructor(message: string) {
      message = `Error with auth, ${message}`;
      super(message, true, HttpStatusErrorResponse.UNAUTHORIZED);
    }
  }
  
  export default UnauthorizedError;
  