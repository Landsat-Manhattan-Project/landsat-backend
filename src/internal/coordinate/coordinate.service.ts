import { Service } from "typedi";
import { Coordinate } from "./coordinate.entity";
import { CoordinateRepository } from "./coordinate.repository";

@Service()
export class CoordinateService {
    constructor(private coordinateRepository: CoordinateRepository) {}

    async saveCoordinates(latitude: number, longitude: number, purpose: string, iconName: string | null): Promise<Coordinate> {
        const coordinate = new Coordinate(latitude, longitude, purpose, iconName);
        return this.coordinateRepository.saveCoordinate(coordinate);
    }
}