import React from 'react';
import './App.css';
import ReactOnClick from './R066_ReactOnClick';
import ReactOnChange from './R067_ReactOnChange';
import ReactMouseMove from './R068_ReactMouseMove';
import ReactMouseOver from './R069_ReactMouseOver';
import ReactMouseOut from './R070_ReactMouseOut';
import ReactKeyEvent from './R071_ReactKeyEvent';
import ReactOnSubmit from './R072_ReactOnSubmit';

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <h3>R066</h3>
      <ReactOnClick/>
      <h3>R067</h3>
      <ReactOnChange/>
      <h3>R068</h3>
      <ReactMouseMove/>
      <h3>R069</h3>
      <ReactMouseOver/>
      <h3>R070</h3>
      <ReactMouseOut/>
      <h3>R071</h3>
      <ReactKeyEvent/>
      <h3>R072</h3>
      <ReactOnSubmit/>
    </div>
  );
}

export default App;
