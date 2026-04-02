"use server";

import nodemailer from "nodemailer";

export async function skrivEpost(data: FormData) {
    const formNamn = data.get("name") as string;
    const formEmail = data.get("email") as string;
    const formSubject = data.get("subject") as string;
    const formMessage = data.get("message") as string;
    
    const epostMessage=  "<b>Från:</b> " + formNamn + " | " + "<b>Epost:</b> " + formEmail + + "<br> <b>Gällande:</b> " + formSubject + "<br>" + formMessage;

    const transporter = nodemailer.createTransport({
    host:  process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // TLS via STARTTLS
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
}); 

  const info = await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: formEmail,
    subject: formSubject,
    html: epostMessage,
  });

  console.log('Message sent: ', info.messageId);

}