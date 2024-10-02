import React from 'react';
import styles from './shopCard.css';

const ShopCard = ({ title, image, price, url }) => {
    const handleCardClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="shop-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default ShopCard;

