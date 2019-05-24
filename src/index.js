import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component/Game';
import './index.css';

window.CONSTS = {
  NUM_ROWS: 7,
  NUM_COLS: 7,
  SHIP_LENGTH: 3,
  NUM_SHIPS: 3,
  EMPTY: ' ',
}

ReactDOM.render(<Game />, document.getElementById("root"));
