import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Gen Next Education" />
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Passion</a></p>
          <p><a href="#wgpt3">Programs</a></p>
          <p><a href="#blog">Platforms</a></p>
          <p><a href="#features">Partners</a></p>
          <p>People</p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        {/* <p>Sign in</p> */}
        <button type="button"><a href="http://iamfutureready.com/">Register for free advising</a></button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Passion</a></p>
            <p><a href="#wgpt3">Programs</a></p>
            <p><a href="#possibility">Platforms</a></p>
            <p><a href="#features">Partners</a></p>
            <p><a href="#blog">People</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            {/* <p>Sign in</p> */}
            <button type="button" href="http://iamfutureready.com/">Register for free advising</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
