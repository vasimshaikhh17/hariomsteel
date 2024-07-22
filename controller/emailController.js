import nodemailer from 'nodemailer';
import asyncHandler from 'express-async-handler'

export const sendEmail = asyncHandler(async(data,req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'maheshrailway8@gmail.com',
          pass: process.env.GMAIL_PASS,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: `"Hariom Steel" <sales@hariomsteel.com>`, // sender address
          to: data.to, // list of receivers
          subject: data.subject, // Subject line
          text: data.text, // plain text body
          html: data.html, // html body
        });
      
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);

})


export const sendUserEmail = asyncHandler(async(data,req,res)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // Use `true` for port 465, `false` for all other ports
        auth: {
          user: 'maheshrailway8@gmail.com',
          pass: process.env.GMAIL_PASS,
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: `"Hariom Steel" <sales@hariomsteel.com>`, // sender address
          to: data.to, // list of receivers
          subject: data.subject, // Subject line
          text: data.text, // plain text body
          html: data.html, // html body
        });      
        console.log("Message sent: %s", info.messageId);
      }
      main().catch(console.error);

})


