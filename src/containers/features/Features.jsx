import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '300+ Universtites Served',
    text: 'Since 2011, Gen Next Education has helped universities expand their reach, impact, and visibility. We provide strategic expertise and tactical coordination to help you advance your internationalization agenda through a unique, effective and efficient suite of services.',
  },
  {
    title: '300000+ Students Engaged',
    text: 'Unlike overseas consultants and agents who either charge the student a fee to help them or charge universities a commission for every student they send (and in some cases, both), all of the services we provide are free of cost to the students.',
  },
  {
    title: '750+ High Schools Visited',
    text: 'We provide schools the resources necessary to offer a global experience for their students in the form of webinars, workshops, programs, and partnerships with institutions from around the world.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
