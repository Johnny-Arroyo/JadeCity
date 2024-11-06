import React, { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import './News.css'
import { fetchAPIData } from '../../utils/fetchAPIData.js'
import { useQuery } from 'react-query'

const News = () => {
    
    const {data, status} = useQuery(
        'news', // query Key
        () => fetchAPIData('news'), // query function
        { 
            staleTime: 1000 * 60 * 60 * 24, // cache is stale only after 24 hours
            cacheTime: 1000 * 60 * 60, // cache available if you re-visit site for 1 hour
            refetchOnWindowFocus: false // if switch tabs and come back, will not refetch
        } 
        
    );

    if(status === 'loading'){ // style loading
        return <p>Loading...</p>;
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
        <section id='news'>
            <h2>News</h2>
            <p className='newsMsg'>
                Stay tuned for the latest updates and news from Jade
                City Records!
            </p>
            <div className="news-list-page">
            {
            
            data.map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news[0]}
                        description={news[1]}
                        img={news[2]}
                    />
            ))}
            </div>
        </section>
    )
};

export default News;