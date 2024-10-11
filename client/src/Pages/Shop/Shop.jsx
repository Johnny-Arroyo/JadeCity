import React, { useEffect, useState } from 'react';
import { fetchAPIData } from '../../utils/fetchAPIData';
import ShopCard from '../../components/ShopCard/ShopCard';
import styles from './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getShopData = async () => {
            try {
                const data = await fetchAPIData('shop');

                // Log the entire product list to verify the structure
                // console.log('Full product list:', data);

                // Filter products to include only those that are visible
                const availableProducts = data
                    .filter(product => product.visible === true)
                    
                    .map(product => {
                        // Select a random image from the images array
                        const randomImageIndex = Math.floor(Math.random() * product.images.length);
                        const imageUrl = product.images[randomImageIndex]?.src;

                        // Find the first enabled and available variant for the price
                        const inStockVariant = product.variants?.find(variant => variant.is_enabled && variant.is_available);

                        // Get the product URL from the handle property
                        const productUrl = product.external?.handle;  // This is the URL for the popup Printify shop

                        return {
                            id: product.id,
                            title: product.title,
                            image: imageUrl,
                            price: inStockVariant ? inStockVariant.price / 100 : 'Unavailable',
                            url: productUrl  // Add the product URL here
                        };
                    });

                // Select up to 3 random available products
                const randomProducts = availableProducts
                    .sort(() => Math.random() - 0.5)  // Shuffle products randomly
                    .slice(0, 3);                      // Pick 3 random products

                // console.log('Random products selected:', randomProducts); // Log the selected random products
                setProducts(randomProducts);
            } catch (err) {
                console.error('Error fetching or processing shop data:', err);
                setError(err.message);
            }
        };

        getShopData(); // Fetch data once on component mount
    }, []); // Empty dependency array ensures this runs only once

    return (
        <section id="shop">
            <h2>Shop</h2>
            <div className="shop-list">
                {products.length > 0 ? (
                    products.map(product => (
                        <ShopCard
                            key={product.id}  // Ensure this key is unique
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            url={product.url}  // Pass the product URL as a prop
                        />
                    ))
                ) : (
                    <div className="loading"><p>Loading Merch...</p></div>
                )}
            </div>
        </section>
    );
};

export default Shop;
