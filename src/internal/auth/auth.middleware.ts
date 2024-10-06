import { NextFunction, Request, Response } from "express";
import Container from "typedi";
import { JwtService } from "./jwt/jwt.service";
import UnauthorizedError from "../shared/error/error.unauthorized";
import { UserData, UserRequest } from "../shared/type/type.user.request";

export const authUser = (
    req: UserRequest,
    _res: Response,
    next: NextFunction
  ): void => {
    const token = getTokenFromtRequest(req);
    const jwtService = Container.get(JwtService);
  
    const payload = jwtService.verify(token);
    if (payload === null) {
      next(new UnauthorizedError('token invalido'));
    } else {
      const user: UserData = { id: payload.id, name: payload.name, email: payload.email, purpose: payload.purpose, role: payload.role };
      req.user = user;
      next();
    }
  };
  
  const getTokenFromtRequest = (req: Request): string => {
    if (req.headers.authorization === undefined) {
      throw new UnauthorizedError('token not found');
    }
  
    return req.headers.authorization.split(' ').pop() ?? '';
  };
  