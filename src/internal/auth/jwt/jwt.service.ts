import { Service } from 'typedi';
import jwt from 'jsonwebtoken';
import fs from 'fs';
import { config } from '../../config/config.env';

@Service()
export class JwtService {
  private privateKey: string;
  private publicKey: string;

  constructor() {
    this.privateKey = fs.readFileSync(config.privateKeyPath, 'utf8');
    this.publicKey = fs.readFileSync(config.publicKeyPath, 'utf8');
  }

  sign(payload: object, expiresIn: string = config.expirationTime) {
    return jwt.sign(payload, this.privateKey, { algorithm: 'RS256', expiresIn });
  }

  verify(token: string) {
    return jwt.verify(token, this.publicKey, { algorithms: ['RS256'] });
  }
}
