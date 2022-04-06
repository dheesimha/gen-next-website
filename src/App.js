import React from 'react';

import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { Brand, Navbar } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <Features />
    <WhatGPT3 />
    <Blog />
    {/* <CTA /> */}
    {/* <Possibility /> */}
    <Footer />
  </div>
);

export default App;
