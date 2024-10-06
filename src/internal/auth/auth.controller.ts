import { Request, Response } from "express";
import Container from "typedi";
import { AuthService } from "./auth.service";

export const signUp = async (req: Request, res: Response) => {
    const authService = Container.get(AuthService);

    const { email, password, purpose, role } = req.body;
    const token = await authService.signUp(email, password, purpose, role);

    return res.status(201).json({ token, role, purpose });
}

export const login = async (req: Request, res: Response) => {
    const authService = Container.get(AuthService);

    const { email, password } = req.body;
    const data = await authService.signIn(email, password);

    return res.status(200).json(data);
}

