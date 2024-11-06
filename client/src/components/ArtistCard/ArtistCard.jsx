// src/components/ArtistCard.js
import React from 'react'
import styles from './artistCard.css'

// Alternate way to use Cloudinary for more control over image options
// import { Cloudinary } from '@cloudinary/url-gen';
// import { AdvancedImage } from '@cloudinary/react';

import { useNavigate } from 'react-router-dom'

const ArtistCard = ({ name, bio, img, inspiration, spotify }) => {
    const navigate = useNavigate()

    // const imgUrl = img
    //     .replace(
    //         'https://drive.google.com/file/d/',
    //         'https://drive.google.com/thumbnail?id='
    //     )
    //     .replace(/\/view.*/, '')

    // const cld = new Cloudinary({ cloud: { cloudName: 'cloud-name' } }); // add cloud name
    // const img = cld
    //     .image('dimatis-photo') // needs photo's public ID
    //     .format('auto') 
    //     .quality('auto')

    const spotifyUrl = spotify
        .replace('artist', 'embed/artist')
        .replace(/\?.*/, '?utm_source=generator')

    const handleArtistClick = () => {
        // redirect to artist page of that specific card. /artist/:name, then creates a larger version of the artist card
        const newName = name.replace(/ /g, '-')
        navigate(`/artists/${newName}`, {
            state: { name, bio, img, inspiration, spotifyUrl },
        })
    }

    return (
        <div
            className="artist-card"
            onClick={handleArtistClick}
            style={{ cursor: 'pointer' }}>
            <img src={img} alt={`Photo of ${name}`} />
            {/* <AdvancedImage cldImg={img}/> */}
            <h3 className="name">{name}</h3>
        </div>
    )
}

export default ArtistCard;
