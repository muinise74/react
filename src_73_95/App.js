import React from 'react';
import './App.css';
import ReactRef from './R073_ReactRef';
import Currying from './R074_ReactCurrying';
import ReactHoc from './Hoc/R075_ReactHoc';
import ContextAPI from './Context/R076_ContextAPI';
import ContextAPI2 from './Context/R077_ContextAPI2';

function App() {
  return (
    <div className="App">
      <h1>Start React 200!</h1>
      <h3>R073_Ref</h3>
      <ReactRef/>
      <h3>R074_Currying</h3>
      <Currying/>
      <h3>R075_Higher_Order_Component</h3>
      <ReactHoc name = 'React200'/>
      <h3>R076_Context_API</h3>
      <ContextAPI />
      <h3>R077_Context_API_2</h3>
      <ContextAPI2 />
    </div>
  );
}

export default App;
