import React from 'react';
import { Link } from 'react-router-dom';

function City(props) {
  const name = props.name.toLocaleLowerCase().replace(' ', '-');
  return (
    <div className="city">
      <div className={`city-icon ${name}`}></div>
      <p>{props.name}</p>
      <div className="drop-view"><Link to={`/${name}`}>View</Link></div>
    </div>
  )
}

export default City;