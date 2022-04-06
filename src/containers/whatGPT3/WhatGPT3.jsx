import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What we do?" text="Whether you are a university wanting to enhance your internationalization efforts, a student searching for your next big education opportunity, or a school interested in helping your students prepare for the global economy, we welcome you to explore how YOU can become future-ready with Gen Next Education." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h2 className="gradient__text">Explore our programs</h2>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="For Universities" text="Expand your reach, impact, visibility in India and the Middle East" link="https://www.gennexteducation.com/universities/" />
      <Feature title="For Students" text="Explore your Study Abroad options" link="https://www.gennexteducation.com/students/" />
      <Feature title="For Schools" text="Prepare future-ready students" link="https://www.gennexteducation.com/schools/" />
    </div>
  </div>
);

export default WhatGPT3;
