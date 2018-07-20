import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import './Memory.css';
import Tile from './Tile';
import Navbar from './Navbar';

const tileStates = {
  HIDING: 0,
  SHOWING: 1,
  STAYING: 2
};

class Memory extends Component {
  constructor(props) {
    super(props);
    const tiles = [
      { id: 1, color: "yellow", currentState: tileStates.HIDING },
      { id: 2, color: "yellow", currentState: tileStates.HIDING },
      { id: 3, color: "blue", currentState: tileStates.HIDING },
      { id: 4, color: "blue", currentState: tileStates.HIDING },
      { id: 5, color: "green", currentState: tileStates.HIDING },
      { id: 6, color: "green", currentState: tileStates.HIDING },
      { id: 7, color: "crimson", currentState: tileStates.HIDING },
      { id: 8, color: "crimson", currentState: tileStates.HIDING },
      { id: 9, color: "HotPink", currentState: tileStates.HIDING },
      { id: 10, color: "HotPink", currentState: tileStates.HIDING },
      { id: 11, color: "purple", currentState: tileStates.HIDING },
      { id: 12, color: "purple", currentState: tileStates.HIDING },
      { id: 13, color: "chocolate", currentState: tileStates.HIDING },
      { id: 14, color: "chocolate", currentState: tileStates.HIDING },
      { id: 15, color: "aqua", currentState: tileStates.HIDING },
      { id: 16, color: "aqua", currentState: tileStates.HIDING },
    ];
    const shuffledTiles = shuffle(tiles);
    this.state = {tiles: shuffledTiles, noClick: false};
    this.handleClick = this.handleClick.bind(this);
    this.handleShowOrHide = this.handleShowOrHide.bind(this);
    this.handleNewGame = this.handleNewGame.bind(this);
  }

  handleNewGame() {
    const tiles = shuffle(this.state.tiles.map(t => ({...t, currentState: tileStates.HIDING})));
    this.setState({tiles});
  }

  handleShowOrHide() {
    let tiles = this.state.tiles;
    const showingTiles = this.state.tiles.filter(t => t.currentState === tileStates.SHOWING);
    if (showingTiles.length === 2) {
      if(showingTiles[0].color === showingTiles[1].color) {
        showingTiles.forEach(t => t.currentState = tileStates.STAYING);
      } else {
        showingTiles.forEach(t => t.currentState = tileStates.HIDING);
      }
      showingTiles.forEach(tile => {
        tiles = this.state.tiles.map(t => t.id === tile.id ? tile : t);
      });
    }
    this.setState({tiles, noClick: false});
  }

  handleClick(id) {
    if(!this.state.noClick) {
      const clickedTile = this.state.tiles.find(t => t.id === id);
      if (clickedTile.currentState === tileStates.HIDING) {
        const showingTiles = this.state.tiles.filter(t => t.currentState === tileStates.SHOWING);
        const tiles = this.state.tiles.map(t => t.id === id ? {...clickedTile, currentState: tileStates.SHOWING} : t);
        this.setState({tiles, noClick: !!showingTiles.length}, () => setTimeout(this.handleShowOrHide, 1400));
      }
    }
  }

  render() {

    const gameBoard = this.state.tiles.map(tile => (
      <Tile
        key={tile.id}
        color={tile.color}
        showing={tile.currentState !== tileStates.HIDING}
        handleClick={() => this.handleClick(tile.id)}
      />
    ));

    return (
      <div className="game-board">
        <Navbar newGame={this.handleNewGame}/>
        {gameBoard}
        <div className="description">Simple memory card game made with React</div>
      </div>
    );
  }
}

export default Memory;
