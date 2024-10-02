import React, { useEffect, useState } from 'react';
import NewsCard from './NewsCard.jsx'; // Adjust the path if necessary

const NewsBanner = (props) => {
    
    const news = props.news || []; 
    
    return (
        <div className='news'>
            <h2>Latest News</h2>
            <p>
                Stay tuned for the latest updates and news from Jade
                City Records!
            </p>
            <div className='news-list'>
                {news.slice(0,3).map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news[0]}
                        description={news[1]}
                        img={news[2]}
                    />
                ))}
            </div>
        </div>
    )
}

export default NewsBanner;
