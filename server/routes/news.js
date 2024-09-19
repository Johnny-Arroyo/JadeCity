
require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch'); // Use dynamic import
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const range = 'Sheet2!A2:C'; // Adjust as necessary

    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data.values); // Sending artist data to the client
  } catch (error) {
    console.error('Error fetching news data:', error);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});

module.exports = router;