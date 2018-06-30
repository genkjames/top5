import React from 'react';
import View from './View';

function About(props) {
  const aboutStatements = [
      {
        icon: "eye",
        statement: "View the weather of the top 5 popular cities in the world."
      },
      {
        icon: "compass",
        statement: "You not only get to see the weather, but also a famous icon of the city."
      },
      {
        icon: "arrow-down",
        statement: "Click on any of the cities below and start exploring!"
      }
    ].map((about, i) => {
      return (
        <View 
          key={i}
          icon={about.icon}
          statement={about.statement}
        />
      )
    })
  return (
    <div className="about">
      {aboutStatements}
    </div>
  )
}

export default About;