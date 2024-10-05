import { Service } from "typedi";
import { Coordinate } from "./coordinate.entity";
import coordinateSchema from "./coordinate.schema";

@Service()
export class CoordinateRepository {
    async saveCoordinate(coordinate: Coordinate): Promise<Coordinate> {
        return coordinateSchema.create(coordinate);
    }
}