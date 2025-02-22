require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { default: fetch } = await import('node-fetch');
    const sheetId = process.env.GOOGLE_SHEET_ID;
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const range = 'News!A2:C';

    const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data.values);
  } catch (error) {
    console.error('Error fetching news data:', error);
    res.status(500).json({ error: 'Failed to fetch news data' });
  }
});

module.exports = router;