import { Service } from 'typedi';
import { User } from './user.entity';
import userSchema from './user.schema';

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
}