import React from 'react';
import './App.css';
import CookieSave from './R085_CookieSave';
import CookieLoad from './R086_CookieLoad';
import CookieRemove from './R087_CookieRemove';

function App() {
  return (
    <div>
      <h1>Start React 200!!!</h1>
      <h3>R085_CookieSave</h3>
      <CookieSave/>
      <h3>R086_CookieLoad</h3>
      <CookieLoad/>
      <h3>R087_CookieRemove</h3>
      <CookieRemove/>
    </div>
  );
}

export default App;
