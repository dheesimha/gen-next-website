import React from 'react';
import './article.css';

const Article = ({ imgUrl, title, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      {/* <p>Read Full Article</p> */}
    </div>
  </div>
);

export default Article;
