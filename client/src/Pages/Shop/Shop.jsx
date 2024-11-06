import React, { useEffect, useState } from 'react'
import { fetchAPIData } from '../../utils/fetchAPIData'
import ShopCard from '../../components/ShopCard/ShopCard'
import styles from './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const getShopData = async () => {
            try {
                const data = await fetchAPIData('shop')

                // Log the entire product list to verify the structure
                // console.log('Full product list:', data);

                const randomProducts = data
                    // Filter for visible products
                    .filter((product) => product.visible === true)
                    // Map each product to a new object with necessary details
                    .map((product) => {
                        const randomImageIndex = Math.floor(
                            Math.random() * product.images.length
                        )
                        const imageUrl =
                            product.images[randomImageIndex]?.src

                        const inStockVariant = product.variants?.find(
                            (variant) =>
                                variant.is_enabled &&
                                variant.is_available
                        )

                        const productUrl = product.external?.handle

                        return {
                            id: product.id,
                            title: product.title,
                            image: imageUrl,
                            price: inStockVariant
                                ? inStockVariant.price / 100
                                : 'Unavailable',
                            url: productUrl,
                        }
                    })
                    // Shuffle and select up to 3 random products
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)

                // console.log('Random products selected:', randomProducts); // Log the selected random products
                setProducts(randomProducts)
            } catch (err) {
                console.error(
                    'Error fetching or processing shop data:',
                    err
                )
                setError(err.message)
            }
        }

        getShopData() // Fetch data once on component mount
    }, []) // Empty dependency array ensures this runs only once

    return (
        <section id="shop">
            <h2>Shop</h2>
            <h3>Jade City Merch</h3>
            <div className="shop-list">
                {products.length > 0 ? (
                    products.map((product) => (
                        <ShopCard
                            key={product.id} // Ensure this key is unique
                            title={product.title}
                            image={product.image}
                            price={product.price}
                            url={product.url} // Pass the product URL as a prop
                        />
                    ))
                ) : (
                    <div className="loading">
                        <p>Loading Merch...</p>
                    </div>
                )}
            </div>
            <h3>Firefly Laser Shop</h3>
            <div className="fireflyCard">
                <div style={{ cursor: 'pointer' }}>
                    <a
                        href="https://fireflylaserlights.square.site/product/jade-city-lamp/36?cp=true&sa=true&sbp=false&q=false"
                        target="_blank">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="photo of Jade City Lamp"
                        />
                    </a>
                    <p>Jade City Desk Lamp</p>
                    <p>$50</p>
                </div>
            </div>
        </section>
    )
}

export default Shop
