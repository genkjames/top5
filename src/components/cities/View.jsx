import React from 'react';

function View(props) {
  console.log(props);
  return (
    <div>
      {props.city ? (<h1>{props.city.name}</h1>) : (<h1>Loading</h1>)}
      
    </div>
  )
  
}

export default View;