import { Service } from "typedi";
import { Coordinate } from "./coordinate.entity";
import { UserData } from "../shared/type/type.user.request";
import { UserRepository } from "../auth/user/user.repository";

@Service()
export class CoordinateService {
    constructor(private userRepository: UserRepository) {}

    async saveCoordinates(userData: UserData, latitude: number, longitude: number, purpose: string, iconName: string | null): Promise<void> {
        const coordinate = new Coordinate(latitude, longitude, purpose, iconName);
        this.userRepository.saveCoordinate(userData.id, coordinate);
    }

    async getAllCoordinatesByUser(userData: UserData): Promise<Coordinate[]> {
        return  this.userRepository.getCoordinatesByUser(userData.id);
    }
}