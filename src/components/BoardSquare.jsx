import React, { Component } from 'react';
import { DropTarget } from "react-dnd";
import { ItemTypes } from "../Constants";
import Square from './Square';

//import './BoardSquare.scss';

const squareTarget = {
  canDrop(props) {
    return props.canMoveKnight(props.x, props.y);
  },

  drop(props, monitor) {
    props.moveKnight(props.x, props.y);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }
}

class BoardSquare extends Component {

  renderOverlay = (color) => {
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}/>
    );
  };

  render() {
    const { x, y, children, connectDropTarget, isOver, canDrop } = this.props;
    const black                                                  = (x + y) % 2 === 1;
    return connectDropTarget(
      <div style={{ height: '100%', position: 'relative', }}>
        <Square black={black}>
          {children}
        </Square>
        {isOver && !canDrop && this.renderOverlay('red')}
        {isOver && canDrop && this.renderOverlay('green')}
        {!isOver && canDrop && this.renderOverlay('yellow')}
      </div>
    )
  }
}

BoardSquare.defaultProps = {};

export default DropTarget(ItemTypes.KNIGHT, squareTarget, collect)(BoardSquare);
