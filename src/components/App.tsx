import React from 'react';
import './App.css';
import Board from './Board';

function App() {
  
  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <Board extraLanes={2}></Board>
    </div>
  );
}

export default App;
