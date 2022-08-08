import React from 'react';
import './App.css';
import Props from './R017_Props';
import PropsDatatype from './R018_PropsDatatype'
import PropsBoolean from './R019_PropsBoolean'
import PropsObjVal from './R020_PropsObjVal'
import PropsRequired from './R021_PropsRequired'
import PropsDefault from './R022_PropsDefault'
import PropsNode from './R023_PropsNode.js'

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <h3>R017</h3>
      <Props props_val="This is Props"></Props>
      <h3>R018</h3>
      <PropsDatatype String = 'react' Number = {200} Boolean = {1==1} Array = {[0,1,8]}
      ObjectJson = {{react:'리액트',twoHundred : "200"}} Function = {console.log("FunctionProps : function!")}></PropsDatatype>
      <h3>R019</h3>
      <PropsBoolean TrueFalse = {false}></PropsBoolean>
      <PropsBoolean TrueFalse></PropsBoolean>
      <h3>R020</h3>
      <PropsObjVal ObjectJson = {{react:'리액트',twoHundred : "200"}}></PropsObjVal>
      <h3>R021</h3>
      <PropsRequired reactNumber = {200}></PropsRequired>
      <h3>R022</h3>
      <PropsDefault reactNumber = {200}></PropsDefault>
      <h3>R023</h3>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}

export default App;
