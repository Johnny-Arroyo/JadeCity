require('dotenv').config()
const express = require('express') // Make sure to include this if using node-fetch
const router = express.Router()
const fs = require('fs');

const PRINTIFY_API_KEY = process.env.PRINTIFY_API_KEY
const PRINTIFY_SHOP_ID = process.env.PRINTIFY_SHOP_ID // Get store ID from env

// Fetch Printify products using the store ID
router.get('/', async (req, res) => {
    try {
        const response = await fetch(
            `https://api.printify.com/v1/shops/${PRINTIFY_SHOP_ID}/products.json`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${PRINTIFY_API_KEY}`,
                    'Content-Type': 'application/json',
                    'User-Agent': 'NodeJS',
                },
            }
        )

        if (!response.ok) {
            const errorDetails = await response.json()
            console.error('Error fetching products:', errorDetails)
            return res
                .status(response.status)
                .json({
                    error:
                        errorDetails.message ||
                        'Failed to fetch products',
                })
        }

        const products = await response.json()
        // console.log("HERE ARE THE PRODUCTS => ", products);

        //write product data to local file to more easily read it
        fs.writeFile('productsResponse.json', JSON.stringify(products, null, 2), (err) => {
          if (err) {
              console.error('Error writing to file:', err);
          } else {
              console.log('Products data written to productsResponse.json');
          }
      });


        res.json(products.data)
    } catch (error) {
        console.error('Fetch error:', error)
        res.status(500).json({ error: 'Failed to fetch products' })
    }
})

module.exports = router
