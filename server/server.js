require('dotenv').config()
const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// Enable CORS
app.use(
    cors({
        origin: [
            'http://localhost:3000',
            'https://jadecityrecords.com',
            'https://www.jadecityrecords.com',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization'],
    })
)

// Serve API routes
const emailRoute = require('./routes/email')
app.use('/api/email', emailRoute)

const artistsRoutes = require('./routes/artists')
app.use('/api/artists', artistsRoutes)

const newsRoutes = require('./routes/news')
app.use('/api/news', newsRoutes)

const shopRoutes = require('./routes/shop')
app.use('/api/shop', shopRoutes)

// Serve React app for non-API routes
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
})

// Start Server
app.listen(port, () => {
    console.log(`😎 Server is running on http://localhost:${port} 😎`)
})
