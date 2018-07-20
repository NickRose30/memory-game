import React from 'react';
import './Navbar.css';

const Navbar = ({ newGame }) => (
  <div className="topnav">
    <h2>Memory Game</h2>
    <h3 onClick={newGame}>New Game</h3>
  </div>
);

export default Navbar;
