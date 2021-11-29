import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  let activeStyle = {
    background: 'tomato'
  };

  return (
    <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink end to="/" style={({isActive}) => isActive ? activeStyle : undefined }>Home</NavLink></li>
      <li><NavLink to="/about" className={({isActive}) => isActive ? "active dayo" : undefined}>About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>
    </ul>    
  </header>
  )
};

export default Header;