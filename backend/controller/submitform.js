import moment from "moment";
import { SubmitForm } from "../models/submitform.js";
import { sendEmail, sendUserEmail } from "./emailController.js";
import asyncHandler from "express-async-handler";

export const submitForm = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, phoneNumber, city, area, subject, message } = req.body;

  // Custom validation
  if (!firstName || typeof firstName !== 'string' || firstName.length < 2 || firstName.length > 50) {
    return res.status(400).json({ message: 'Invalid first name' });
  }
  if (!lastName || typeof lastName !== 'string' || lastName.length < 2 || lastName.length > 50) {
    return res.status(400).json({ message: 'Invalid last name' });
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email' });
  }
  // const phoneRegex = /^[0-9]{10,15}$/;
  const phoneRegex = /^\+?[1-9][0-9]{7,14}$/;
  if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
    return res.status(400).json({ message: 'Invalid phone number' });
  }
  if (!city || typeof city !== 'string' || city.length < 2 || city.length > 100) {
    return res.status(400).json({ message: 'Invalid city' });
  }
  if (!area || typeof area !== 'string' || area.length < 2 || area.length > 100) {
    return res.status(400).json({ message: 'Invalid area' });
  }
  if (!subject || typeof subject !== 'string' || subject.length < 2 || subject.length > 100) {
    return res.status(400).json({ message: 'Invalid subject' });
  }
  if (!message || typeof message !== 'string' || message.length < 2 || message.length > 500) {
    return res.status(400).json({ message: 'Invalid message' });
  }

  try {
    // // Check for duplicate submission
    // const existingForm = await SubmitForm.findOne({ email, phoneNumber });
    // if (existingForm) {
    //   return res.status(400).json({ message: 'A form with this email and phone number has already been submitted.' });
    // }

        // Check for duplicate submission within the last 5 days
        const fiveDaysAgo = moment().subtract(5, 'days').toDate();
        const recentForm = await SubmitForm.findOne({
          email,
          phoneNumber,
          createdAt: { $gte: fiveDaysAgo }
        });
    
        if (recentForm) {
          return res.status(400).json({ message: 'A form with this email and phone number has already been submitted within the last 5 days. Please try again later.' });
        }

    // Create a new instance of SubmitForm
    const form = new SubmitForm({
      firstName,
      lastName,
      email,
      phoneNumber,
      city,
      area,
      subject,
      message
    });

    // Save form to database
    const savedForm = await form.save();

    // Email data to be sent
    const emailData = {
      to: 'sales@hariomsteel.com',
      cc: '',
      subject: 'Form Submission Confirmation',
      text: `Hello Hariom Steel Team ${firstName},\n\nhas Submitted form Successfully. Here are the details:\n\n
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Phone Number: ${phoneNumber}\n
      City: ${city}\n
      Area: ${area}\n
      Subject: ${subject}\n
      Message: ${message}\n
      Date: ${new Date().toLocaleDateString()}\n
      Time: ${new Date().toLocaleTimeString()}\n\n
      Best regards,\nYour Company`,
      html: `<p>Hello ${firstName},</p><p>You Got a New Form, Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone Number:</strong> ${phoneNumber}</li>
        <li><strong>City:</strong> ${city}</li>
        <li><strong>Area:</strong> ${area}</li>
        <li><strong>Subject:</strong> ${subject}</li>
        <li><strong>Message:</strong> ${message}</li>
        <li><strong>Date:</strong> ${new Date().toLocaleDateString()}</li>
        <li><strong>Time:</strong> ${new Date().toLocaleTimeString()}</li>
      </ul>
      <p>Best regards,</p><p>Hariom Steel</p>`,
    };

    const userEmailData = {
      to: email,
      cc: '',
      subject: 'Form Submission Confirmation',
      text: `Hello ${firstName},\n\nForm Submitted Successfully\n\n
      Best regards,\nBytefaze Websolutions`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  background-color: #f4f4f4;
                  margin: 0;
                  padding: 0;
              }
              .container {
                  max-width: 600px;
                  margin: 40px auto;
                  background-color: #ffffff;
                  padding: 20px;
                  border-radius: 12px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                  position: relative;
                  overflow: hidden;
                  background-image: linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.8)), url("https://www.bytefaze.com/static/media/bytedark.a3c12a86e807bbe5c820.png");
                  background-size: contain;
                  background-position: center;
                  background-repeat: no-repeat;
                  /* opacity: 0.1; */
              }
              .header {
                  text-align: start;
                  padding-bottom: 20px;
              }
              .header img {
                  max-width: 200px;
              }
              .content {
                  text-align: left;
                  position: relative;
                  z-index: 1;
              }
              .content h1 {
                  color: #007BFF;
                  font-size: 26px;
              }
              .content p {
                  color: #333333;
                  font-size: 16px;
                  line-height: 1.6;
              }
              .footer {
                  text-align: center;
                  margin-top: 20px;
                  font-size: 12px;
                  color: #999999;
              }             
              .divider {
                  height: 1px;
                  background-color: #eeeeee;
                  margin: 20px 0;
              }
              .link {
                  color: #007BFF;
                  text-decoration: none;
              }
              .link:hover {
                  text-decoration: underline;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="background-decor"></div>
              <div class="background-decor background-decor-left"></div>
             
              <div class="content">
                  <h1>Thank You for Reaching Out to Hariom Steel!</h1>
                  <p>Dear ${firstName} ${lastName},</p>
                  <p>Thank you for submitting your details to Hariom Steel. If you are inquiring about our services, we appreciate your interest and trust in our company.</p>
                  <p>Our team will review your submission and get back to you shortly. In the meantime, if you have any immediate questions, feel free to reply to this email or contact us at:</p>
                  <p>
                      Email: <a class="link" href="mailto:sales@hariomsteel.com">Sales@hariomsteel.com</a><br>
                      Phone: +91 90822 05826
                  </p>
                  <div class="divider"></div>
                  <p>Best Regards,</p>
                  <p>Hariom Steels</p>
              </div>
              <div class="footer">
                  &copy; 2023 Hariom Steel. All rights reserved.<br>
                  Visit us at: <a class="link" href="https://www.hariomsteel.com/">www.hariomsteel.com</a>
              </div>
          </div>
      </body>
      </html>
      `,
    };

    // Send email
    await sendEmail(emailData);
    await sendUserEmail(userEmailData);

    res.status(201).json({ message: 'Form submitted successfully and email sent', form: savedForm });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export const getForms = asyncHandler(async (req, res) => {
  const pageSize = Number(req.query.pageSize) || 10;
  const page = Number(req.query.pageNumber) || 1;

  const filters = {};
  if (req.query.email) {
    filters.email = { $regex: req.query.email, $options: 'i' };
  }
  if (req.query.phoneNumber) {
    filters.phoneNumber = { $regex: req.query.phoneNumber, $options: 'i' };
  }
  if (req.query.firstName) {
    filters.firstName = { $regex: req.query.firstName, $options: 'i' };
  }
  if (req.query.lastName) {
    filters.lastName = { $regex: req.query.lastName, $options: 'i' };
  }

  const count = await SubmitForm.countDocuments(filters);
  const forms = await SubmitForm.find(filters)
    .limit(pageSize)
    .skip(pageSize * (page - 1));

  res.json({ forms, page, pages: Math.ceil(count / pageSize) });
});

export const getFormsById = asyncHandler(async(req,res)=>{
  const id = req.params.id
  try{
    const form = await SubmitForm.findById(id)
    if(form){
      res.json({message:"success",form:form})
    }else{
      res.status(404).json({ message: 'Form not found' });
    }
  }catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
})

export const deleteForm = asyncHandler(async (req, res) => {
  try {
    const form = await SubmitForm.findByIdAndDelete(req.params.id);

    if (form) {
      res.json({ message: 'Form deleted successfully' });
    } else {
      res.status(404).json({ message: 'Form not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});