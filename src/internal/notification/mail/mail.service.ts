import { Service } from "typedi";
import nodemailer, { Transport, Transporter } from "nodemailer";
import { config } from "../../config/config.env";
import SMTPTransport from "nodemailer/lib/smtp-transport";

@Service()
export class MailService {
    private transport : Transporter<SMTPTransport.SentMessageInfo, SMTPTransport.Options>;
    constructor() { 
        this.transport = this.setupMail();
    }

    async sendMail(receiverEmail: string, subject: string, emailBody: string) {
        const mailOptions = {
            from: '<' + config.emailAddress + '>',
            to: receiverEmail,
            subject: subject,
            html: emailBody
        }

        return await this.transport.sendMail(mailOptions);
    }
    
    setupMail() {
        return nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            secure: false,
            auth: {
                user: config.emailAddress,
                pass: config.emailPassword
            }
        })
    }

    async checkService() {
        return await this.transport.verify();
    }
}