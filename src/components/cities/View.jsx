import React from 'react';

function View(props) {
  return (
    <div>
      {props.city ? (
        <div className={`${props.city.name.toLocaleLowerCase().replace(' ', '-')} city-view`}>
          <div className="cover">
            <div className="temp-container">
              <div>
                <p className="temperature">{Math.ceil(props.city.main.temp)}&deg;F</p>
                <div className="description">
                  <img src={`http://openweathermap.org/img/w/${props.city.weather[0].icon}.png`} alt="weather-icon" />
                  <p>{props.city.weather[0].description}</p>
                </div>
              </div>
              <div>
                <p>Min: {props.city.main.temp_min}&deg;F</p>
                <p>Max: {props.city.main.temp_max}&deg;F</p>
              </div>
            </div>
            <h1>{props.city.name}</h1>
            <p>humidity: {props.city.main.humidity}</p>
            
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}      
    </div>
  )
  
}

export default View;