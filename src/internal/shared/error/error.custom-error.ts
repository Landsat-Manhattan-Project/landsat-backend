import { HttpStatusErrorResponse } from "./error.const";

export class CustomError extends Error {
  constructor(
    private readonly _message: string,
    public readonly isOperational = false,
    private readonly _statusHttp: HttpStatusErrorResponse = HttpStatusErrorResponse.INTERNAL_SERVER_ERROR
  ) {
    super(_message);
  }

  get statusHttp(): HttpStatusErrorResponse {
    return this._statusHttp;
  }

  get message(): string {
    return this._message;
  }

}

export default CustomError;