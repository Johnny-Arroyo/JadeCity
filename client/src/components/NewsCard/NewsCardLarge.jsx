import React from 'react'
import { useLocation } from 'react-router-dom';
import './NewsCard.css'

function NewsCardLarge() {

    const location = useLocation();
    const { title, description, imgUrl } = location.state; // get title, description, img from the card we clicked on in NewsCard

    return (
        <div className="news-card-large" onClick={() => handleNewsClick()}>
            <h2>{title}</h2>
            <img
                    src={imgUrl}
                    alt={"News Image"}
                    className="news-img-large"
            />
            <p>{description}</p>
        </div>
    )
}

export default NewsCardLarge;