import React from 'react';
import styles from './shopCard.css';

const FireflyCard = ({ title="Jade City Desk Lamp", image="/static/images/FireflyLaser.jpg", price='50', url="https://fireflylaserlights.square.site/product/jade-city-lamp/36?cp=true&sa=true&sbp=false&q=false"}) => {
    const handleCardClick = () => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="firefly-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
            <p className="price">${price}</p>
        </div>
    );
};

export default FireflyCard;