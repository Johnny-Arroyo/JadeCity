// server.js
require('dotenv').config();

const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT

// Serve static files from the dist directory
app.use('/', express.static(path.join(__dirname, '../dist')))

// Handle any other routes (if necessary)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to Jade City</h1>')
})

app.listen(port, () => {
    console.log(`😎 Server is running on http://localhost:${port} 😎`)
})
