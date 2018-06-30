import React from 'react';
import { Link } from 'react-router-dom';

function City(props) {
  const name = props.name.toLocaleLowerCase().replace(' ', '-');
  return (
    <Link to={`/${name}`} className="city">
      <img className="city-icon" src={require(`../../images/${name}.jpg`)} alt="city icon" />
      <p>{props.name}</p>
    </Link>
  )
}

export default City;