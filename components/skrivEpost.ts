"use server";

import nodemailer from "nodemailer";

export async function skrivEpost(data: FormData) {
    const formNamn = data.get("name") as string;
    const formEmail = data.get("email") as string;
    const formSubject = data.get("subject") as string;
    const formMessage = data.get("message") as string;
    
    const epostMessage=  "Från: " + formNamn + " " + "Epost: " + formEmail + "<br>" + 
                          formMessage;

    // Standard exempel konfiguration för nodemailer, kan bara eposta kontot som registerats hos nodemailer
    // const transporter = nodemailer.createTransport({
    //     host: "smtp.resend.com",
    //     port: 465,
    //     secure: true,
    //     auth: {
    //         user: "resend",            
    //         pass: "re_R4PMZ61Q_MSCTpZYnJNMLngnG2SDPy6NM",
    //     },
    // });

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
    from: "Kontaktformulär <typhio@msn.com>", //Måste sättas som en giltig epostadress.
    to: formEmail,
    subject: formSubject,
    html: epostMessage,
  });

  console.log('Message sent: ', info.messageId);

}