import React from 'react';
import nyc from '../../images/nyc.png';
import { Link } from 'react-router-dom';

function City(props) {
  return (
    <Link to={`/${props.name.toLocaleLowerCase()}`} className="city">
      <img className="city-icon" src={nyc} alt={props.name} />
      <p>{props.name}</p>
    </Link>
  )
}

export default City;