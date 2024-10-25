import React, { useEffect, useState } from 'react'
import ArtistCard from '../ArtistCard/ArtistCard.jsx' // Adjust the path if necessary

const ArtistBanner = (props) => {
    const artists = props.artists || []

    return (
        <section id="artists">
            <h2>Our Artists</h2>
            <div className="artist-list">
                {artists.map((artist, index) => (
                    <ArtistCard
                        key={index}
                        name={artist[0]}
                        bio={artist[1]}
                        img={artist[2]}
                        inspiration={artist[3]}
                        spotify={artist[4]}
                    />
                ))}
            </div>
        </section>
    )
}

export default ArtistBanner
