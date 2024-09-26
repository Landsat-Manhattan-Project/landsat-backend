import mongoose, { Error } from 'mongoose';
import { Service } from 'typedi';
import { LoggerService } from '../shared/logger/logger.service';
import { config } from './config.env';

@Service()
export class DatabaseService {
  constructor(private logger: LoggerService) {}

  async connect() {
    try {
      await mongoose.connect(config.mongoUri);
      this.logger.log('MongoDB connected');
    } catch (err: any) {

      const e: Error = err;
      this.logger.error('MongoDB connection error: ' + e.message);
      this.logger.error('Exiting process');
      process.exit(1);
    }
  }
}
