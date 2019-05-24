import React from 'react';
import './Square.css';

export default class Square extends React.Component {
  status() {
    if (this.props.value === 'X') return 'square hit';
    else if (this.props.value === 'O') return 'square miss';
    else if (this.props.value === null) return 'square empty';
    else return 'square';
  }

  render() {
    return (
      <button className={this.status()} onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}
