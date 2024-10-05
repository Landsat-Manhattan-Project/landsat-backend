import { Request, Response } from "express";
import Container from "typedi";
import { CoordinateService } from "./coordinate.service";

export const addCoordinates = async (req: Request, res: Response) => {
    const coordinateService = Container.get(CoordinateService);

    const { latitude, longitude, name, iconName } = req.body;
    const coordinate = await coordinateService.saveCoordinates(latitude, longitude, name, iconName);

    

    return res.status(201).json({ coordinate });
}