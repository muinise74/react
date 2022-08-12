import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers'

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers);

const listener = () => {
  root.render(
    <Provider store = {store}>
      <App indexProp = 'react' />
    </Provider>
  );
}

store.subscribe(listener);
listener();