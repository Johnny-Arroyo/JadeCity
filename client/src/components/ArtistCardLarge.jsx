import React from 'react'
import { useLocation } from 'react-router-dom';


function ArtistCardLarge() {

    const location = useLocation();
    const { name, bio, imgUrl, inspiration } = location.state; 

    return (
        <div className="artist-card-large" onClick={() => handleArtistClick()}>
            <img
                className="artist-img-large"
                src={imgUrl}
                alt={`Photo of ${name}`}
            />
            <div className="artist-info-large">
                <h3>{name}</h3>
                <p>{bio}</p>
                <p>
                    <strong>Inspiration:</strong> {inspiration}
                </p>
            </div>
        </div>
    )

}

export default ArtistCardLarge