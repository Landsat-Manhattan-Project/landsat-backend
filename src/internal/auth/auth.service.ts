import { Service } from "typedi";
import { User } from "./user/user.entity";
import { UserRepository } from "./user/user.repository";
import { JwtService } from "./jwt/jwt.service";
import bcrypt from 'bcrypt';
import { AlreadyExistsError } from "../shared/error/error.already-exists";
import { InvalidCredentialsError } from "../shared/error/error.invalid-credentials";

@Service()
export class AuthService {
    constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

    async signUp(email: string, password: string, purpose: string): Promise<string> {
        const userExists = await this.userRepository.findUserByEmail(email);
        if (userExists) {
            throw new AlreadyExistsError('User');
        }

        const encryptedPassword = await bcrypt.hash(password, 12)

        const user = new User(email, encryptedPassword, purpose);
        const userSchema = await this.userRepository.createUser(user);
        return this.jwtService.sign({ id: userSchema.id, email: userSchema.email });
    }

    async signIn(email: string, password: string): Promise<string> {
        const user = await this.userRepository.findUserByEmail(email);;

        if (!user) {
            throw new InvalidCredentialsError();
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            throw new InvalidCredentialsError();
        }
        
        return this.jwtService.sign({ id: user.id, email: user.email, purpose: user.purpose });
    }

}