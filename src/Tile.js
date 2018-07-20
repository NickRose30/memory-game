import React from 'react';
import './Tile.css';

const Tile = ({ color, showing, handleClick }) => {
  const currentColor = showing ? color : 'gray';
  return (
    <div
      className="tile"
      style={{backgroundColor: currentColor}}
      onClick={handleClick}
    >
    </div>
  )
};

export default Tile;