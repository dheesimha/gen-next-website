import React from 'react';
import './feature.css';

const Feature = ({ link, title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <a href={link}><h1>{title}</h1></a>
    </div>
    <div className="gpt3__features-container_feature-text">
      <a href={link}><p>{text}</p></a>
    </div>
  </div>
);

export default Feature;
