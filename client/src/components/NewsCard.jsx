import React from 'react'

function NewsCard({ title, description, img }) {
  
    const handleNewsClick = () => {
        console.log("News Clicked");
        // redirect to news page at that specific card
    };
  
    return (
    <div className="news-card" onClick={() => handleNewsClick()}>
      <h2>{title}</h2>
      <img
            src={img}
            alt={"News Image"}
            className="news-img"
      />
    </div>
    );
}

export default NewsCard;