import React from 'react';

function View(props) {
  console.log(props);
  return (
    <div>
      {props.city ? (
        <div className={`${props.city.name.toLocaleLowerCase().replace(' ', '-')} city-view`}>
          <div className="cover">
            <h1>{props.city.name}</h1>
            <p>temperature: {props.city.main.temp}</p>
            <p>description: {props.city.weather[0].description}</p>
            <p>humidity: {props.city.main.humidity}</p>
            <p>min temp: {props.city.main.temp_min}</p>
            <p>max temp: {props.city.main.temp_max}</p>
          </div>
        </div>
      ) : (
        <h1>Loading</h1>
      )}      
    </div>
  )
  
}

export default View;