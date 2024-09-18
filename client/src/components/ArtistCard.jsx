// src/components/ArtistCard.js
import React from 'react'

const ArtistCard = ({ name, bio, img, inspiration }) => {
    return (
        <div className="artist-card">
            <img
                src={img}
                alt={`Photo of ${name}`}
                className="artist-img"
            />
            <div className="artist-info">
                <h3>{name}</h3>
                <p>{bio}</p>
                <p>
                    <strong>Inspiration:</strong> {inspiration}
                </p>
            </div>
        </div>
    )
}

export default ArtistCard
