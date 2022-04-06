import React from 'react';
// import people from '../../assets/people.png';
import headerimg from '../../assets/header-img.svg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Namaste!</h1>
      <h1 className="gradient__text">Welcome to Gen Next Education, Inc.</h1>
      <p>An international education organization powered by passionate people dedicated to creating future-ready leaders.</p>
    </div>

    <div className="gpt3__header-image">
      <img src={headerimg} />
    </div>
  </div>
);

export default Header;
