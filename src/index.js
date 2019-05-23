import React from 'react';
import ReactDOM from 'react-dom';
import Game from './component/Game';
import './index.css';

const NUM_ROWS = 7;
const NUM_COLS = 7;
const SHIP_LENGTH = 3;
const EMPTY = '_';

ReactDOM.render(<Game />, document.getElementById("root"));
