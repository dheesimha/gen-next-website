import React from 'react';
import './cta.css';
import Article from '../article/Article';
import { blog03, blog02 } from './imports';

const CTA = () => (
  <div className="gpt3__cta">
    <Article imgUrl={blog03} date="" text="connectED" />
    <Article imgUrl={blog02} date="" text="gradED" />
  </div>
);

export default CTA;
