import React from 'react'

function NewsCard({ title, description, img }) {
  
    const handleNewsClick = () => {
        console.log("News Clicked");
        // redirect to news page at that specific card. /news/:id, then renders a larger version of the news card
        // react-router-dom useNavigate hook
    };

    const imgUrl = img.replace(
      'https://drive.google.com/file/d/',
      'https://drive.google.com/thumbnail?id='
      ).replace(/\/view.*/, '')  
  
    return (
    <div className="news-card" onClick={() => handleNewsClick()}>
      <h2>{title}</h2>
      <img
            src={imgUrl}
            alt={"News Image"}
            className="news-img"
      />
    </div>
    );
}

export default NewsCard;