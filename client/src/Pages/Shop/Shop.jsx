import React, { useEffect, useState } from 'react'
import { fetchAPIData } from '../../utils/fetchAPIData'
import ShopCard from '../../components/ShopCard/ShopCard'
import FireflyCard from '../../components/ShopCard/FireflyCard'
import styles from './Shop.css'
import { useQuery } from 'react-query'

const Shop = () => {
    const getShopData = async () => {
        try {
            const data = await fetchAPIData('shop')

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
                            variant.is_enabled && variant.is_available
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
            return randomProducts
        } catch (err) {
            console.error(
                'Error fetching or processing shop data:',
                err
            )
            setError(err.message)
        }
    }

    const {
        data: products,
        status,
        refetch,
    } = useQuery(
        // caching the products we randomly selected
        'shop', // query Key
        getShopData // query function
        // {
        //     staleTime: 1000 * 60 * 15, // cache is stale only after 15 minutes
        //     refetchOnWindowFocus: false // if switch tabs and come back, will not refetch
        // }
    )

    if (status === 'loading') {
        return <p className="loading">Loading Merch...</p>
    }

    if (status === 'error') {
        // if it fails, will retry 3 times before giving this error
        return (
            <div>
                <p>Error!</p>
                <button onClick={() => refetch()}>Reload</button>
            </div>
        )
    }

    return (
        <section id="shop">
            <h2>Shop</h2>
            {/* <h3>Jade City Merch</h3> */}
            <div className="shop-list">
                {products.map((product) => (
                    <ShopCard
                        key={product.id}
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        url={product.url}
                    />
                ))}
            </div>
            {/* <h3 className="firefly-shop">Firefly Laser Shop</h3> */}
            <div>
              <FireflyCard/>
            </div>
        </section>
    )
}

export default Shop
