// server.js
require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT

// Serve static files from the dist directory
app.use('/', express.static(path.join(__dirname, '../dist')))

// API routes

const emailRoute = require('./routes/email')
app.use('/api/email', emailRoute)

const artistsRoutes = require('./routes/artists');
app.use('/api/artists', artistsRoutes);

const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

// Handle any other routes (if necessary)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port, () => {
    console.log(`😎 Server is running on http://localhost:${port} 😎`)
})
