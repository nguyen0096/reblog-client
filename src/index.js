import React from 'react';
import ReactDOM from 'react-dom';

import App from 'containers/App';

const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <App />,
  MOUNT_NODE,
);

if (module.hot) {
  // Accept update for itself
  module.hot.accept();

  // module.hot.accept(['./App.js'],(err) => {
  //     console.log("reloading self");
  //     window.location.reload();
  // })
}
