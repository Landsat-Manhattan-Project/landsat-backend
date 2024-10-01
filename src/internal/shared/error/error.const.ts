export enum HttpStatusSuccessful {
    OK = 200,
    RESOURCE_CREATED = 201,
    NO_CONTENT = 204
  }
  
  export enum HttpStatusClientError {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    CONFLICT = 409,
    UNSUPPORT_MEDIA_TYPE = 415
  }
  
  export enum HttpStatusServerError {
    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    BAD_GATEWAY = 502
  }
  
  export const HttpStatusErrorResponse = {
    ...HttpStatusServerError,
    ...HttpStatusClientError
  };
  
  // eslint-disable-next-line @typescript-eslint/no-redeclare
  export type HttpStatusErrorResponse =
    | HttpStatusServerError
    | HttpStatusClientError;