import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" exact >Home</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;
