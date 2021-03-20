import './app.scss';

import React, { useRef } from 'react';

import SideMenu from 'containers/Control/SideMenu';
import NavBar from 'containers/Control/NavBar';
import TodoList from 'containers/Todo/TodoList';

const App = (props) => {
    return (
        <div className="app">
            <SideMenu />
            <NavBar />
            <TodoList />
        </div>
    );
};

export default App;
