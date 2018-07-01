import React from 'react';
import City from './City';
import logo from '../../images/logo.png';

function View(props) {
  let otherCities;

  if(props.city.others) {
    otherCities = props.city.others.map(city => {
      return (
        <City 
          key={city.id}
          name={city.name}
        />
      )
    })
  }

  return (
    <div>
      {props.city.city ? (
        <div className="city-container">
          <div className={`${props.city.city.name.toLocaleLowerCase().replace(' ', '-')} city-view`}>
            <div className="cover">
              <div className="temp-container">
                <div>
                  <p className="temperature">{Math.ceil(props.city.city.main.temp)}&deg;F</p>
                  <div className="description">
                    <img src={`http://openweathermap.org/img/w/${props.city.city.weather[0].icon}.png`} alt="weather-icon" />
                    <p>{props.city.city.weather[0].description}</p>
                  </div>
                  <div className="other-specs">
                    <p><span className="spec">Min:</span> <span>{Math.floor(props.city.city.main.temp_min)}&deg;F</span></p>
                    <p><span className="spec">Max:</span> <span>{Math.ceil(props.city.city.main.temp_max)}&deg;F</span></p>
                    <p><span className="spec">Humidity:</span> <span>{props.city.city.main.humidity}%</span></p>
                  </div>
                </div>
                <div className="info">
                  <h1 className="special-font">{props.city.city.name}</h1>
                  <img className="logo-mini" src={logo} alt="logo" />
                </div>
              </div>            
            </div>
          </div>
          <div className="more-cities">
            {otherCities}
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}      
    </div>
  )
  
}

export default View;