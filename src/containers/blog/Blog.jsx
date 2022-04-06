import React from 'react';
import Article from '../../components/article/Article';
import { blog02, blog03 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h4 className="gradient__text">Platforms we offer</h4>
    </div>
    <div className="gpt3__blog-container">
      {/* <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div> */}
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} title="gradED" text="*brief explanation about gradED*" />
        <Article imgUrl={blog03} title="connectED" text="connectED allows students, counselors, and universities to build meaningful relationships and go beyond just a basic college search process" />
        {/* <Article imgUrl={blog04} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" /> */}
      </div>
    </div>
  </div>
);

export default Blog;
