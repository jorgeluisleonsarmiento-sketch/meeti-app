import { emailConfig } from "../config/config";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmailTemplate";
import { VerificationEmailData } from "../types/type";
import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData): Promise<void> {
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: 'Confirma tu cuenta en Meeti',
            text: renderVerificationEmail(data),
            html: renderVerificationEmailText(data)
        })
    }
}

// AuthEmailService.sendVerificationEmail()