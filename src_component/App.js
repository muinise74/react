import React from 'react';
import './App.css';
import ComponentClass from './R027_ComponentClass'
import PureComponentClass from './R028_PureComponentClass';
import ShallowEqual from './R029_ShallowEqual';
import FunctionComponent from './R030_FunctionComponent';
import ReactHook from './R031_ReactHook';
import Fragments from './R032_Fragments';
import ReturnMap from './R033_ReturnMap';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <h3>R027</h3>
      <ComponentClass></ComponentClass>
      <h3>R028</h3>
      <PureComponentClass></PureComponentClass>
      <h3>R029</h3>
      <ShallowEqual></ShallowEqual>
      <h3>R030</h3>
      <FunctionComponent contents = "[This is FunctionComponent]"></FunctionComponent>
      <h3>R031</h3>
      <ReactHook></ReactHook>
      <h3>R032</h3>
      <Fragments></Fragments>
      <h3>R033</h3>
      <ReturnMap></ReturnMap>
    </div>
  );
}

export default App;
