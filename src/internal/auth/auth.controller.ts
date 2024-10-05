import { Request, Response } from "express";
import Container from "typedi";
import { AuthService } from "./auth.service";

export const signUp = async (req: Request, res: Response) => {
    const authService = Container.get(AuthService);

    const { email, password, purpose } = req.body;
    const token = await authService.signUp(email, password, purpose);

    return res.status(201).json({ token });
}

export const login = async (req: Request, res: Response) => {
    const authService = Container.get(AuthService);

    const { email, password } = req.body;
    const token = await authService.signIn(email, password);

    return res.status(200).json({ token });
}

