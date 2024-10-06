import { Request, Response } from "express";
import { UserData, UserRequest } from "../shared/type/type.user.request";
import Container from "typedi";
import { LandsatService } from "./landsat.service";

export const reminderLandsat = (req: UserRequest, res: Response) => {
    const landsatService = Container.get(LandsatService);
    landsatService.calculateLandsatPass(req.body.lat, req.body.lon, req.user as UserData);

    res.status(200).send("Landsat pass reminder scheduled");    
}

export const analyzeLandsat = async (req: UserRequest, res: Response) => {
    const landsatService = Container.get(LandsatService);
    const data = await landsatService.analyzeLandsatData(req.body.lat, req.body.lon, req.user as UserData);

    res.status(200).json(data);
}