import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { email, phone, username, service, bedrooms, bathrooms, postCode} = await request.json();

        const transporter = nodemailer.createTransport({
            host: process.env.NEXT_PUBLIC_EMAIL_HOST,
            port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT),
            secure: false,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL_USER,
                pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD
            }
        });

        const mailOption = {
            from: 'Shah Cleaning Services',
            to: 'info@shahcleaningservices.com.au',
            subject: "Shah Cleaning Services",
            html: `
        <h3>This Email is Submitted From Your Website SCS</h3>
        <br/>
        <p><b>Username: </b>${username}</p> 
        <p><b>Email: </b>${email}</p>
        <p><b>Phone: </b>${phone}</p> 
        <p><b>Service: </b>${service}</p> 
        <p><b>Bedrooms: </b>${bedrooms}</p> 
        <p><b>Bathrooms: </b>${bathrooms}</p> 
        <p><b>Postcode: </b>${postCode}</p> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email", error: error.message }, { status: 500 });
    }
}