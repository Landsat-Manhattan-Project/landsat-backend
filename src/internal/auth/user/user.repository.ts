import { Service } from 'typedi';
import { User } from './user.entity';
import userSchema from './user.schema';
import { Coordinate } from '../../coordinate/coordinate.entity';

@Service()
export class UserRepository {
  async findUserByEmail(email: string): Promise<User | null> {
    return userSchema.findOne({ email });
  }

  async createUser(user: User): Promise<User> {
    return userSchema.create(user);
  }

  async findUserById(id: string): Promise<User | null> {
    return userSchema.findById(id);
  }

  async saveCoordinate(userId: string, coordinate: Coordinate): Promise<User | null> {
    return userSchema.findByIdAndUpdate(userId, { $push: { locations: coordinate } }, { new: true });
  }

  async getCoordinatesByUser(userId: string): Promise<Coordinate[]> {
    const user = await userSchema.findById(userId).select('locations');
    return user ? user.locations : [];
  }

  async deleteCoordinateByUser (userId: string, coordinateId: string): Promise<User | null> {
    return userSchema.findByIdAndUpdate(userId, { $pull: { locations: { _id: coordinateId } } }, { new: true });
  }
}