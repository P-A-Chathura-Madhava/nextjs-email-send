import nodemailer from "nodemailer";

export async function POST(request: any) {        
        const mailServer = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.PASSWORD,
          },
        });

        mailServer.sendMail({
          from: process.env.FROM_EMAIL,
          to: process.env.TO_EMAIL,
          subject: 'New Email',
          text: 'E-mail Body'
        },(err, info) => {
          if (err) {
            console.log("Cannot Send Your Email");            
          }else {
            console.log("Email Sent Succesfully!");
            
          }
        })
}
