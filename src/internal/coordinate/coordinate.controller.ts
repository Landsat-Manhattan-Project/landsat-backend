import { Response } from "express";
import Container from "typedi";
import { CoordinateService } from "./coordinate.service";
import { UserData, UserRequest } from "../shared/type/type.user.request";

export const addCoordinates = async (req: UserRequest, res: Response) => {
    const coordinateService = Container.get(CoordinateService);

    const { latitude, longitude, name, iconName } = req.body;
    const userData = req.user as UserData;
    const coordinate = await coordinateService.saveCoordinates(userData, latitude, longitude, name, iconName);

    return res.status(201).json({ coordinate });
}

export const getCoordinates = async (req: UserRequest, res: Response) => {
    const coordinateService = Container.get(CoordinateService);
    const userData = req.user as UserData;

    const coordinates = await coordinateService.getAllCoordinatesByUser(userData);

    return res.status(200).json({ coordinates });
}