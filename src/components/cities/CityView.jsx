import React from 'react';
import City from './City';
import logo from '../../images/logo.png';

function CityView(props) {
  let otherCities;

  if(props.others) {
    otherCities = props.others.map(city => {
      return (
        <City 
          key={city.id}
          name={city.name}
        />
      )
    })
  }

  return (
    <div className="city-container">
      <div className={`${props.city.name.toLocaleLowerCase().replace(' ', '-')} city-view`}>
        <div className="cover">
          <div className="temp-container">
            <div>
              <p className="temperature">{Math.ceil(props.city.main.temp)}&deg;F</p>
              <div className="description">
                <img src={`http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`} alt="weather-icon" />
                <p>{props.city.weather[0].description}</p>
              </div>
              <div className="other-specs">
                <p><span className="spec">Min:</span> <span>{Math.floor(props.city.main.temp_min)}&deg;F</span></p>
                <p><span className="spec">Max:</span> <span>{Math.ceil(props.city.main.temp_max)}&deg;F</span></p>
                <p><span className="spec">Humidity:</span> <span>{props.city.main.humidity}%</span></p>
              </div>
            </div>
            <div className="info">
              <h1 className="special-font">{props.city.name}</h1>
              <img className="logo-mini" src={logo} alt="logo" />
              <div className="other-specs">
                <p><span className="spec">Sunrise:</span> <span>{new Date(props.city.sys.sunrise * 1000).toLocaleTimeString()}</span></p>
                <p><span className="spec">Sunset:</span> <span>{new Date(props.city.sys.sunset * 1000).toLocaleTimeString()}</span></p>
              </div>
            </div>
          </div>            
        </div>
      </div>
      <div className="more-cities">
        {otherCities}
      </div>
    </div>
  )
}

export default CityView;