"use server";

import nodemailer from "nodemailer";

export async function skrivEpost(data: FormData) {
    const formNamn = data.get("name") as string;
    const formEmail = data.get("email") as string;
    const formSubject = data.get("subject") as string;
    const formMessage = data.get("message") as string;
    
    const epostMessage=  "Från: " + formNamn + " " + "Epost: " + formEmail + "<br>" + 
                          formMessage;

    const transporter = nodemailer.createTransport({
        host: "smtp.resend.com",
        port: 465,
        secure: true,
        auth: {
            user: "resend",            
            pass: "re_R4PMZ61Q_MSCTpZYnJNMLngnG2SDPy6NM",
        },
    });
  const info = await transporter.sendMail({
    from: 'onboarding@resend.dev',
    to: formEmail,
    subject: formSubject,
    html: epostMessage,
  });

  console.log('Message sent: ', info.messageId);

}