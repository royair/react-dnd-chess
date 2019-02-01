import React, { Component } from 'react';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

import './Knight.scss';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

class knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;

    return connectDragSource(
      <span className="Knight"
            style={{
              opacity: isDragging ? 0.5 : 1,
            }}>
        ♘
      </span>
    )
  }
}

knight.defaultProps = {};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(knight);
