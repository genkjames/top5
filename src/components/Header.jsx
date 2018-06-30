import React from 'react';
import logo from '../images/logo.png';

function Header(props) {
  return (
    <header>
      <img className="logo" src={logo} alt="logo" />
      <h1 className="catch-phrase special-font">Not just your ordinary weather app!</h1>
    </header>
  )
}

export default Header;