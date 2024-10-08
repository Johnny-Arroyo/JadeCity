import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';

const News = (props) => {
    
    const news = props.news || []; 

    return (
        <div className='news'>
            <h1>All News</h1>
            <p>
                Stay tuned for the latest updates and news from Jade
                City Records!
            </p>
            {
            news.map((news, index) => (
                    <NewsCard
                        key={index}
                        title={news[0]}
                        description={news[1]}
                        img={news[2]}
                    />
            ))}
        </div>
    )
};

export default News;