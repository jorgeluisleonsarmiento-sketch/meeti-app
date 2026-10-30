import { emailConfig } from "../config/config";
import { renderPasswordResetEmail, renderPasswordResetEmailText } from "../templates/PasswordResetEmailTemplate";
import { renderVerificationEmail, renderVerificationEmailText } from "../templates/VerificationEmailTemplate";
import { PasswordResetEmailData, VerificationEmailData } from "../types/type";
import { EmailService } from "./EmailService";

export class AuthEmailService {
    static async sendVerificationEmail(data: VerificationEmailData): Promise<void> {
        await EmailService.send({
            from: emailConfig.from.verification,
            to: data.email,
            subject: 'Meeti - Confirma tu cuenta en Meeti',
            text: renderVerificationEmail(data),
            html: renderVerificationEmailText(data)
        })
    }

    static async sendPasswordResetToken(data: PasswordResetEmailData ) : Promise<void> {
        await EmailService.send({
            from: emailConfig.from.passwordReset,
            to: data.email,
            subject: 'Meeti - Restablece tu passworden',
            text: renderPasswordResetEmail(data),
            html: renderPasswordResetEmailText(data)
        })
    }
}

// AuthEmailService.sendVerificationEmail()