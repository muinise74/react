import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);
const root = ReactDOM.createRoot(document.getElementById('root'));

const listener = () => {
  root.render(
    <App store={store}/>,
  )
}

store.subscribe(listener);

listener();