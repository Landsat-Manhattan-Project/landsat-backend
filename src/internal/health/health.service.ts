import { Service } from 'typedi';
import mongoose from 'mongoose';
import { MailService } from '../notification/mail/mail.service';

@Service()
export class HealthService {
  constructor(private maiLService: MailService){}
  async checkHealth() {
    const dbConnection = mongoose.connection.readyState === 1 ? 'Connected' : 'Disconnected';
    const emailStatus = await this.maiLService.checkService();
    const healthy = mongoose.connection.readyState === 1 && emailStatus === true;
  
    
    return {
      healthy,
      dbConnection,
      emailStatus
    };
  }
}
