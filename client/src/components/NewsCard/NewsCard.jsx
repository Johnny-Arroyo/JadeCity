import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NewsCard.css'

function NewsCard({ title, description, img }) {
  
    const navigate = useNavigate();

    // const imgUrl = img.replace(
    //   'https://drive.google.com/file/d/',
    //   'https://drive.google.com/thumbnail?id='
    //   ).replace(/\/view.*/, '')  

    const handleNewsClick = () => {
        // redirect to news page of that specific card. /news/:title, then creates a larger version of the news card
        const newTitle = title.replace(/ /g, '-');
        navigate(`/news/${newTitle}`, { state: { title, description, img } }); 
    };

    return (
    <div className="news-card" onClick={() => handleNewsClick()}>
      <h3 className="news-title">{title}</h3>
      <img
            src={img}
            alt={"News Image"}
            className="news-img"
      />
    </div>
    );
}

export default NewsCard;