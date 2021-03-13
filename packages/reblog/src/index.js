// TODO: can't click on imports and go to source file

import 'normalize.css';
import './index.scss';

// TODO: Remove this and still able to use async
// Standalone runtime for Regenerator-compiled generator and async functions.
import "regenerator-runtime/runtime.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  MOUNT_NODE,
);

if (module.hot) {
  module.hot.accept();
}
