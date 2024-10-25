import React, { useEffect, useState } from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import './News.css'

const News = (props) => {
    
    const news = props.news || []; 

    return (
        <section id='news'>
            <h2>News</h2>
            <p>
                Stay tuned for the latest updates and news from Jade
                City Records!
            </p>
            <div className="news-list-page">
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
        </section>
    )
};

export default News;