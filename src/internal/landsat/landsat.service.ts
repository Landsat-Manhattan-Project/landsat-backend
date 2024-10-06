import { Service } from "typedi";
import { MailService } from "../notification/mail/mail.service";
import * as schedule from 'node-schedule';
import { reminderNotificationTemplate } from "./landsat.template";
import { LoggerService } from "../shared/logger/logger.service";
import { UserData } from "../shared/type/type.user.request";

@Service()
export class LandsatService {
    constructor(private emailService: MailService, private loggerService: LoggerService) {}

    async calculateLandsatPass(latitude: number, longitude: number, userData: UserData): Promise<void> {
        this.scheduleReminderForLandsatPass(latitude, longitude, userData);
    }

    private async scheduleReminderForLandsatPass(latitude: number, longitude: number, userData: UserData): Promise<void> {
        const date = new Date();
        const randomDays = Math.floor(Math.random() * 12) + 1;
        date.setDate(date.getDate() + randomDays);

        this.loggerService.log(`Landsat pass reminder scheduled for ${date.toDateString()}`);

        schedule.scheduleJob(date, async () => {
            await this.emailService.sendMail(userData.email, 'Landsat Pass Reminder', reminderNotificationTemplate({lat: latitude, lon: longitude}, date));
            this.loggerService.log(`Landsat pass reminder sent for ${date.toDateString()}`);
        });
    }
}