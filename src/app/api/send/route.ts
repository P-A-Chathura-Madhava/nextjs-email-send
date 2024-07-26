import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

// export async function GET(request: any) {
//     return NextResponse.json({message: "Get Request Working"})
// }

// export async function POST(request: any) {
//     const body = await request.json();
//     console.log(body);
    
//     return NextResponse.json({message: `${body.subject} ${body.paragraph}`})
// }

export async function POST(request: any) {
    const body = await request.json();
    // console.log(body);

    const mailServer = createTransport({
        service: 'gmail',
        auth: {
            user: process.env.FROM_EMAIL,
            pass: process.env.PASSWORD
        }
    })

    mailServer.sendMail({
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        // subject: "New Email",
        subject: body.subject,
        // text: "Test Email Body"
        text: body.paragraph
    }, (err, info) => {
        if (err) {
            console.log("Cannot send the Email");
        }else {
            console.log("Email sent succesfully");        
        }        
    })
    return NextResponse.json({message: "Email sent succesfully"})    
}