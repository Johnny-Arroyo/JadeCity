const express = require('express')
const nodemailer = require('nodemailer')
const multer = require('multer')
const router = express.Router()
require('dotenv').config()

// Multer setup for file uploads in memory storage
// If too many concurrent uploads becomes an issue migrate to multer.diskStorage approach
const storage = multer.memoryStorage()

// File filter to accept only audio files
const upload = multer({
    storage: storage,
    limits: { fileSize: 25 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('audio/')) {
            cb(null, true)
        } else {
            cb(
                new Error(
                    'Invalid file type. Only audio files are allowed.'
                ),
                false
            )
        }
    },
})

router.post(
    '/',
    upload.single('fileUpload'),
    (req, res) => {
        const {
            firstName,
            lastName,
            emailAddress,
            trackName,
            artistName,
            additionalInfo,
        } = req.body
        const file = req.file

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
        Additional Info: ${additionalInfo}`,
            attachments: [
                {
                    filename: file.originalname,
                    content: file.buffer,
                },
            ],
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res
                    .status(500)
                    .json({ message: error.toString() })
            }

            // If diskStorage is implemented create cleanup function here

            res.send('Email sent: ' + info.response)
        })
    }
)

module.exports = router
