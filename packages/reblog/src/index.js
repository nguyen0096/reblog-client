// FIXME: can't click on imports and go to source file
// FIXME config hot reload for mobx changes

import 'normalize.css';
import './index.scss';

import "regenerator-runtime/runtime.js";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import App from 'containers/App/App';
import appStore from './stores/AppStore';

const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <Provider appStore={appStore}>
    <App />
  </Provider>,
  MOUNT_NODE,
);

if (module.hot) {
  // Accept update for itself
  module.hot.accept();

  // module.hot.accept(['./index.js'],(err) => {
  //     console.log("reloading self");
  //     window.location.reload();
  // })
}
