import React, { useEffect, useState } from 'react';
import { fetchAPIData } from '../utils/fetchAPIData.js';
import NewsCard from './NewsCard.jsx'; // Adjust the path if necessary

const NewsBanner = () => {
    
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const data = await fetchAPIData('news');
            setNews(data);
        };

        getNews();
    }, []);
    
    return (
        <div className='news'>
            <h1>Latest News</h1>
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