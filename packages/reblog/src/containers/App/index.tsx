import './app.scss';

import React from 'react';

import TodoList from 'containers/Todo/TodoList';
import ThemeChanger from 'containers/Theme/ThemeChanger';

const App = (props) => {
    return (
        <div className="app">
            <TodoList />
            <ThemeChanger />
        </div>
    );
};

export default App;
