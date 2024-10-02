const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
require('dotenv').config()

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/', (req, res) => {
    const {
        firstName,
        lastName,
        emailAddress,
        trackName,
        artistName,
        linkUpload,
        additionalInfo,
    } = req.body

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: 'New Song Submission',
        text: `You have received a new demo from ${firstName} ${lastName}.
          
          Email: ${emailAddress}
          Track Name: ${trackName}
          Artist Name: ${artistName}
          Additional Info: ${additionalInfo}
          
          You can listen to the track here: ${linkUpload}`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: error.toString() })
        }

        res.send('Email sent: ' + info.response)
    })
})

module.exports = router
