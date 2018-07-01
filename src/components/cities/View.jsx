import React from 'react';
import Loading from '../Loading';
import CityView from './CityView';
import ErrorView from '../Error';

function View(props) {
  let isCity;

  if (props.city.city) {
    isCity = <CityView city={props.city.city} others={props.city.others}/>;
  } else {
    isCity = <ErrorView cities={props.cities}/>;
  }

  return (
    <div>
      {props.city.others.length > 0 ? (
        isCity
      ) : (
        <Loading />
      )}      
    </div>
  )  
}

export default View;