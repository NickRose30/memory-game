import React from 'react';
import './Navbar.css';

const Navbar = ({ newGame }) => (
  <div className="topnav">
    <h1>Memory Game</h1>
    <h2 onClick={newGame}>New Game</h2>
  </div>
);

export default Navbar;