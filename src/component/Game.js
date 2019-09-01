import React from 'react';
import Board from './Board';
import Square from './Square';
import calculateWinner from '../logic/calculateWinner';
import { indexToA1 } from '../logic/convertCoords';
import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.restart();
    this.message = null;
  }

  restart() {
    const { NUM_ROWS: nr, NUM_COLS: nc, SHIP_LENGTH: sl, NUM_SHIPS } = window.CONSTS;
    this.state = {
      history: [
        {
          displayGrid: Array(nr * nc).fill(null),
          move: null,
        }
      ],
      stepNumber: 0,
    };

    let to_place = NUM_SHIPS;
    
    const squares = Array(nr * nc).fill(null);
    const ships = {};

    while (to_place > 0) {
      if (Math.random() < 0.5) { // Arbitrarily, this means a vertical ship
        const topr = Math.floor(Math.random() * (nr - sl + 1))
        const topc = Math.floor(Math.random() * nc)

        if ([...Array(sl).keys()].map(i => squares[(topr + i) * nc + topc] === null).every((cell) => cell === null)) {
          for (let i = 0; i < sl; i += 1) {
            squares[(topr + i) * nc + topc] = to_place
          }

          ships[to_place] = sl
          to_place -= 1
        }
      } else { // Horizontal
        const leftr = Math.floor(Math.random() * (nr))
        const leftc = Math.floor(Math.random() * (nc - sl + 1))

        if ([...Array(sl).keys()].map(i => squares[leftr * nc + leftc + i]).every((cell) => cell === null)) {
          for (let i = 0; i < sl; i += 1) {
            squares[leftr * nc + leftc + i] = to_place
          }

          ships[to_place] = sl
          to_place -= 1
        }
      }
    }

    this.ships = ships;
    this.squares = squares;
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const grid = history[history.length - 1].displayGrid.slice();

    if (calculateWinner(this.squares, grid) || grid[i]) return;
    
    if (this.squares[i]) {
      grid[i] = 'X';
      this.message = <div>Nice hit!</div>;
    } else {
      grid[i] = 'O';
      this.message = <div>You missed. Fire again!</div>;
    }

    this.setState({
      history: history.concat([
        {
          displayGrid: grid,
          move: i,
        }
      ]),
      stepNumber: history.length,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
    });
  }

  render() {
    const history = this.state.history;
    const grid = history[this.state.stepNumber].displayGrid;
    const winner = calculateWinner(this.squares, grid);

    const moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}: ${indexToA1(step.move)}` :
        'Go to game start';
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status = winner ? `You won in ${this.state.stepNumber} moves! Click 'Go to game start' to play again.` : `Click a square to make your move!`;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={grid}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          {this.message}
          <div className="tooltip">
            Hover over me for help!
            <span class="tooltiptext">There are {window.CONSTS.NUM_SHIPS} ships on the board, each of which span {window.CONSTS.SHIP_LENGTH} tiles horizontally or vertically. If you click on all three sections of a ship, you sink it! Sink all {window.CONSTS.NUM_SHIPS} ships to win.</span>
          </div>
          <div>{status}</div>
          <ol>
            <li>
              <button onClick={() => {
                this.restart();
              }}>Restart</button>
            </li>
            {moves}
          </ol>
        </div>
        <div className="help">
          <div id="help-hit">
            <Square key='help-hit' value='X' /> 
            <h3>Hit</h3>
          </div>
          <div id='help-miss'>
            <Square key='help-miss' value='O' />
            <h3>Miss</h3>
          </div>
        </div>
      </div>
    );
  }
}
