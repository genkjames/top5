import React from 'react';
import nyc from '../../images/nyc.png';

function View(props) {
  return (
    <div className="city">
      <img className="city-icon" src={nyc} alt={props.city} />
      <p>{props.city}</p>
    </div>
  )
}

export default View;