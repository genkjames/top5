import React from 'react';
import sun from '../images/sun.png';
import cloud from '../images/cloud.png';
import rain from '../images/rain.png';
import snow from '../images/snow.png';
import thunder from '../images/thunder.png';

function WeatherShow(props) {
  return (
    <div className="show">
      <img className="sun weather-element" src={sun} alt="sun"/>
      <img className="cloud weather-element" src={cloud} alt="cloud"/>
      <img className="rain weather-element" src={rain} alt="rain"/>
      <img className="snow weather-element" src={snow} alt="snow"/>
      <img className="thunder weather-element" src={thunder} alt="thunder"/>
    </div>
  )
}

export default WeatherShow;