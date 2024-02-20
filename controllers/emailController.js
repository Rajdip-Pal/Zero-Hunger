const expressAsyncHandler = require('express-async-handler');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
    }
});

const sendEmail = expressAsyncHandler(async(req, res) => {
    const { email, subject, message } = req.body;
    console.log(email, subject, message);

    var mailOptions = {
        from: process.env.SMTP_MAIL,
        to: email,
        subject: subject,
        message: message,
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`Email is sent to ${email}`);
        }
    })
});

module.exports = { sendEmail };