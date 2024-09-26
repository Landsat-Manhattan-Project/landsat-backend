import { Service } from 'typedi';
import mongoose from 'mongoose';

@Service()
export class HealthService {
  async checkHealth() {
    const dbConnection = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    const healthy = mongoose.connection.readyState === 1;
    
    return {
      healthy,
      dbConnection,
    };
  }
}
