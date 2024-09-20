// src/components/ArtistCard.js
import React from 'react'

const ArtistCard = ({ name, bio, img, inspiration }) => {
  const imgUrl = img.replace(
    'https://drive.google.com/file/d/',
    'https://drive.google.com/thumbnail?id='
  ).replace(/\/view.*/, '')  
  
  return (
        <div className="artist-card">
            <img
                className="artist-img"
                src={imgUrl}
                alt={`Photo of ${name}`}
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
