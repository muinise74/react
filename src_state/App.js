import React from 'react';
import './App.css';
import ReactState from './R024_ReactState';
import SetState from './R025_SetState';
import ForceUpdate from './R026_ForceUpdate';

function App() {
  return (
    <div>
      <h1>Start React200!</h1>
      <p>CSS적용하기</p>
      <h3>R024</h3>
      <ReactState reactString = {"react"}></ReactState>
      <h3>R025</h3>
      <SetState></SetState>
      <h3>R026</h3>
      <ForceUpdate></ForceUpdate>
    </div>
  );
}

export default App;
