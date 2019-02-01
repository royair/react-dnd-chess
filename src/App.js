import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from "react-dnd-html5-backend";

import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <Board knightPosition={[3, 5]}/>
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;
