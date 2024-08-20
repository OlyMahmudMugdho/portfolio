import { NextResponse } from "next/server"

const nodemailer = require('nodemailer')

export async function POST(request : Request) {
        
    

    let transporter = await nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD
        }
    })

    try {

        const body = await request.json()

        const {name, emailAddress, visitorsMessage } = (await body)

        let serverResponse = await transporter.sendMail({
            from: "mugdhodzs38@gmail.com",
            to: "oly.ice.pust@gmail.com",
            subject: `self alert : ${name} visited your portfolio website`,
            html: `
                <h1>Name : ${name} </h1>
                <h1>E-mail : ${emailAddress} </h1>
                <p>${visitorsMessage}</p>
            `
        })

        let visitorResponse = await transporter.sendMail({
            from: "oly.ice.pust@gmail.com",
            to: emailAddress,
            subject: "I have received your message",
            html: `
                <h1>Thanks for visiting my website</h1>
                <h3>I will soon respond to your message.</h3>
            `
        })

        return NextResponse.json({
            "ok" : true,
            "message" : "sent"
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            "error" : true,
            "message" : "error occured"
        }, {status : 400})
    }
}
