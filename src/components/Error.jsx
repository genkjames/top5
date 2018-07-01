import React from 'react';
import Cities from './cities/Cities'

function Error(props) {
  return (
    <div className="error">
      <h1>Page not found</h1>
      <p>Try the following links instead</p>
      <Cities cities={props.cities}/>
    </div>
  )
}

export default Error;