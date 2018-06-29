import React from 'react';
import View from './View';

function About(props) {
  const aboutStatements = [
      {
        icon: "cloud",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        icon: "cloud",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        icon: "cloud",
        statement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
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