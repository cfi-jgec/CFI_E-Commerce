import nodemailer from "nodemailer";

export const mailer = async (email: string, subject: string, message: string) => {
    try {
        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 587,
            service: "gmail",
            secure: false,
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.EMAIL_PASSWORD,
            },
        });
        const mailOption = {
            from: process.env.USER_EMAIL,
            to: email,
            subject,
            html: message,
        };
        const mailResponse = await transport.sendMail(mailOption);
        console.log(mailResponse);
        return mailResponse;
    } catch (error: any) {
        throw new Error(error.message);
    }
};
