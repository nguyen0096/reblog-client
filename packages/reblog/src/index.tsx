import 'normalize.css';
import './index.scss';

// TODO: Remove this and still able to use async
// Standalone runtime for Regenerator-compiled generator and async functions.
// import 'regenerator-runtime/runtime.js';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'containers/App';
import { ThemeProvider } from 'containers/Theme/ThemeProvider';
import configureStore from './configureStore';

const initialState = {};
const store = configureStore(initialState);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
    <ThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
    MOUNT_NODE,
);

// Setup HRM
if (module.hot) {
    module.hot.accept();
}

// if (module.hot) {
//   // Hot reloadable React components and translation json files
//   // modules.hot.accept does not accept dynamic dependencies,
//   // have to be constants at compile-time
//   module.hot.accept(['./i18n', 'containers/App'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     render(translationMessages);
//   });
// }
