import React from 'react';

function View(props) {
  return (
    <div>
      <i className={`fa fa-${props.icon}`}></i>
      <p>{props.statement}</p>
    </div>
  )
}

export default View;