// server.js
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT

// Enable CORS
app.use(cors({
    origin: 'https://jadecityrecords.com', // Amplify frontend URL
    allowedHeaders :['Content-Type', 'Authorization', 'Referer'],
}));

// Serve static files from the dist
app.use('/', express.static(path.join(__dirname, '../dist')))

// API routes
const emailRoute = require('./routes/email')
app.use('/api/email', emailRoute)

const artistsRoutes = require('./routes/artists');
app.use('/api/artists', artistsRoutes);

const newsRoutes = require('./routes/news');
app.use('/api/news', newsRoutes);

const shopRoutes = require('./routes/shop');
app.use('/api/shop', shopRoutes);

// Handle any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist', 'index.html'))
})

app.listen(port, () => {
    console.log(`😎 Server is running on http://localhost:${port} 😎`)
})
