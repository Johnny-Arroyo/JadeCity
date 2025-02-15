import React, { useEffect, useState } from 'react';
import ArtistCard from '../../components/ArtistCard/ArtistCard.jsx';
import styles from "./Artists.css"
import { fetchAPIData } from '../../utils/fetchAPIData.js'
import { useQuery } from 'react-query'

const Artists = () => {

  const {data, status} = useQuery(
      'artists', // query Key
      () => fetchAPIData('artists'), // query function
      { 
        staleTime: 1000 * 60 * 60 * 24, // cache is stale only after 24 hours
        cacheTime: 1000 * 60 * 60, // cache available if you re-visit site for 1 hour
        refetchOnWindowFocus: false // if switch tabs and come back, will not refetch
      } 
      
  );

  if(status === 'loading'){ // style loading
      return <p></p>;
  } 

  if(status === 'error'){ // if it fails, will retry 3 times before giving this error
    return (
        <div>
            <p>Error!</p>
            <button onClick={() => refetch()}>Reload</button> 
        </div>
    ); 
  }

  return (
    <section id="artists">
      <h2 className="ourArtists">Our Artists</h2>
      <div className="artist-list">
        {data.map((artist, index) => (
          <ArtistCard
            key={index}
            name={artist[0]}
            bio={artist[1]}
            img={artist[2]}
            // inspiration={artist[3]}
            spotify={artist[3]}
          />
        ))}
      </div>
    </section>
  );
};

export default Artists;