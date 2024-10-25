import React from 'react';

const ProductCard = ({ title, image, price, url }) => {
    return (
        <div className="product-card">
            <a href={url} target="_blank" rel="noopener noreferrer"> {/* Make the image clickable */}
                <img src={image} alt={title} />
            </a>
            <h2>{title}</h2>
            <p>Price: ${price}</p>
        </div>
    );
};

export default ProductCard;
