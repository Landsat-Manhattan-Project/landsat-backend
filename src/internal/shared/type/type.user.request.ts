import { Request } from 'express';

export interface UserData {
    id: string;
    name: string;
    email: string;
    purpose: string;
    role: string;

}

export interface UserRequest extends Request {
    user?: UserData;
}