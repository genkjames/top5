import React from 'react';
import Header from './Header';
import About from './about/About';

function Landing(props) {
  return (
    <div className="landing">
      <Header />
      <About />
    </div>
  )
}

export default Landing;