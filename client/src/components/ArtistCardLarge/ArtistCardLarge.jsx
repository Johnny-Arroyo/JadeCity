import React from 'react'
import { useLocation } from 'react-router-dom'
import styles from './artistCardLarge.css'

function ArtistCardLarge() {
    const location = useLocation()
    const { name, bio, imgUrl, inspiration, spotifyUrl } =
        location.state

    return (
        <div className="artist-card-large">
            <div className="picName">
                <img
                    className="artist-img-large"
                    src={imgUrl}
                    alt={`Photo of ${name}`}
                />
                <h3>{name}</h3>
            </div>
            <div className="artist-info-large">
                <p>{bio}</p>
                <p>
                    <strong>Inspiration:</strong> {inspiration}
                </p>
            </div>
            <div className="spotify">
                <iframe
                    src={spotifyUrl}
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"></iframe>
            </div>
        </div>
    )
}

export default ArtistCardLarge
