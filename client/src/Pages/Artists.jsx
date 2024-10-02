// src/components/ArtistSection.js
import React, { useEffect, useState } from 'react';
import { fetchAPIData } from '../utils/fetchAPIData.js';
import ArtistCard from '../components/ArtistCard'; // Adjust the path if necessary

const Artists = () => {
  const [artists, setArtists] = useState([]);
  
  useEffect(() => {
    const getArtists = async () => {
      const data = await fetchAPIData('artists');
      setArtists(data);
    };

    getArtists();
  }, []);

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
  );
};

export default Artists;
