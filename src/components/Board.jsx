import React, { Component } from 'react';

import Knight from './Knight';
import BoardSquare from './BoardSquare';

import './Board.scss';

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = { knightPosition: [1, 7] }
  }

  renderSquare = (x, y, knightPosition) => {
    const key = `${x}${y}`;

    return (
      <div key={key}
           style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}
                     moveKnight={this.moveKnight}
                     canMoveKnight={this.canMoveKnight}>
          {this.renderPiece(x, y, knightPosition)}
        </BoardSquare>
      </div>
    )
  };

  renderPiece = (x, y, [knightX, knightY]) => {
    if (x === knightX && y === knightY)
      return <Knight/>;
  };

  moveKnight = (toX, toY) => {
    this.setState(() => ({ knightPosition: [toX, toY,] }));
  };

  canMoveKnight = (toX, toY) => {
    const [x, y] = this.state.knightPosition;
    const dxAbs  = Math.abs(toX - x);
    const dyAbs  = Math.abs(toY - y);

    return (dxAbs === 1 && dyAbs === 2) || (dxAbs === 2 && dyAbs === 1);
  };

  render() {
    const { knightPosition } = this.state;
    const squares            = [];

    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        squares.push(this.renderSquare(x, y, knightPosition));
      }
    }

    return (
        <div className="Board">
          {squares}
        </div>
    )
  }
}

Board.defaultProps = {};

export default Board;
