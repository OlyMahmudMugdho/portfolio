import { NextResponse } from "next/server"
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD
    }
  })

  try {
    const body = await request.json()
    const { name, email, message } = body

    // Send email to portfolio owner
    await transporter.sendMail({
      from: process.env.MAIL_USERNAME,
      to: "oly.ice.pust@gmail.com",
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    // Send confirmation email to visitor
    await transporter.sendMail({
      from: "oly.ice.pust@gmail.com",
      to: email,
      subject: "Thank you for contacting me",
      html: `
        <h1>Thank you for reaching out!</h1>
        <p>I have received your message and will get back to you soon.</p>
        <p>Best regards,</p>
        <p>M. Oly Mahmud</p>
      `
    })

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!"
    })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({
      success: false,
      message: "Failed to send message. Please try again."
    }, { status: 500 })
  }
}