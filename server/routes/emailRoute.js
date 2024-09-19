const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// Multer setup for file uploads in memory storage
const storage = multer.memoryStorage();

// File filter to accept only audio files
const upload = multer({ storage: storage, fileFilter: (req, file, cb) => {
  if (file.mimetype.startsWith('audio/')) {
      cb(null, true);
  } else {
      cb(new Error('Invalid file type. Only audio files are allowed.'), false);
  }
}});

router.post('/send-email', upload.single('fileUpload'), (req, res) => {
    const { firstName, lastName, emailAddress, trackName, artistName, additionalInfo } = req.body;
    const file = req.file;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: emailAddress,
        to: 'johnnydrycreek@gmail.com',
        subject: 'New Song Submission',
        text: `You have received a new demo from ${firstName} ${lastName}.
        Email: ${emailAddress}
        Track Name: ${trackName}
        Artist Name: ${artistName}
        Additional Info: ${additionalInfo}`,
        attachments: [
            {
                filename: file.originalname,
                path: file.path
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json( { message: error.toString() });
        }

        // Delete file after email is sent
        fs.unlink(file.path, (err) => {
            if (err) {
                console.error('Failed to delete the file:', err);
            } else {
                console.log('File deleted successfully');
            }
        });

        res.send('Email sent: ' + info.response);
    });
});

module.exports = router;
