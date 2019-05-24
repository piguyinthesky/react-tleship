import React from 'react';
import Square from './Square';
import './Board.css';

export default class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={`square-${i}`}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <div className="board-row" key="header-row" >
          {
            [
              <Square key="empty" value=" " />
            ].concat(
              [...Array(window.CONSTS.NUM_COLS).keys()].map((i) => 
                <Square 
                  key={`col-header-${i}`}
                  value={String.fromCharCode('A'.charCodeAt(0) + i)}
                />
              )
            )
          }
        </div>
        {this.createSquares()}
      </div>
    );
  }

  createSquares() {
    const { NUM_ROWS: nr, NUM_COLS: nc } = window.CONSTS;

    return ([...Array(nr).keys()].map(i => (
      <div className="board-row" key={`row-${i}`}>
        {
          [
            <Square
              key={`row-header-${i}`} 
              value={i+1}
            />
          ].concat([...Array(nc).keys()].map(j =>
            this.renderSquare(i * nc + j)
          ))
        }
      </div>
    )))
  }
}