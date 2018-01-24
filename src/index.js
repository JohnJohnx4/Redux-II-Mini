import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import logger from 'redux-logger';
// import { combineReducers } from 'redux';
// cannot get combine reducers to work. it alters the state so that when App.js tries to render, the state doesnt have any of the props yet
import { chars } from './reducers/starWarsReducer';

const store = createStore(
  // combineReducers,
  chars,
   applyMiddleware(thunk, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
