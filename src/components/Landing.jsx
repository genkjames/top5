import React from 'react';
import Header from './Header';
import About from './about/About';
import Cities from './cities/Cities';

function Landing(props) {
  console.log(props.cities);
  return (
    <div className="landing">
      <Header />
      <About />
      <Cities cities={props.cities}/>
    </div>
  )
}

export default Landing;