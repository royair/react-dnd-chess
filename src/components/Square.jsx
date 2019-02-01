import React, { Component } from 'react';

import './Square.scss';

class Square extends Component {
  render() {
    const { children, black } = this.props;
    const backgroundColor     = black ? 'black' : 'white';
    const color               = black ? 'white' : 'black';
    return (
      <div className="Square" style={{
        backgroundColor,
        color,
      }}>{children}</div>
    )
  }
}

Square.defaultProps = {};

export default Square;
