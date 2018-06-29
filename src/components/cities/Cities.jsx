import React from 'react';
import View from './View';

function Cities(props) {
  return (
    <div className="cities">
      <View city="Bangkok" />
      <View city="London" />
      <View city="Paris" />
      <View city="Singapore" />
      <View city="New York City" />
    </div>
  )
}

export default Cities;