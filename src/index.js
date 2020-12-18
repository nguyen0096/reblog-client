import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';


const MOUNT_NODE = document.getElementById('root')
ReactDOM.render(
    <App />,
    MOUNT_NODE,
)

// if (module.hot) {
//   // Hot reloadable React components and translation json files
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept(['./App.js'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//   });
// }
