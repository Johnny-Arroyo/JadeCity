// src/components/ArtistCard.js
import React from 'react'

import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ name, bio, img, inspiration, spotify }) => {
  
    const navigate = useNavigate();
  
    const imgUrl = img.replace(
        'https://drive.google.com/file/d/',
        'https://drive.google.com/thumbnail?id='
    ).replace(/\/view.*/, '')  

    const spotifyUrl = spotify.replace(
        'artist',
        'embed/artist'
    ).replace(/\?.*/, '?utm_source=generator') 

  const handleArtistClick = () => {
    // redirect to artist page of that specific card. /artist/:name, then creates a larger version of the artist card
    const newName = name.replace(/ /g, '-');
    navigate(`/artists/${newName}`, { state: { name, bio, imgUrl, inspiration, spotifyUrl } });
  };
  
  return (
        <div className="artist-card" onClick={() => handleArtistClick()}>
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
