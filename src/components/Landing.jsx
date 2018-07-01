import React from 'react';
import WeatherShow from './WeatherShow';
import Header from './Header';
import About from './about/About';
import Cities from './cities/Cities';

function Landing(props) {
  return (
    <div>
      <WeatherShow />
      <div className="landing">
        <Header />
        <About />
        <Cities cities={props.cities}/>
      </div>
    </div>
  )
}

export default Landing;