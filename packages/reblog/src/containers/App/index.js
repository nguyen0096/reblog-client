import './app.scss';

import React from 'react';

import TodoList from 'containers/Todo/TodoList';

const App = (props) => {

    return (
        <div>
            <TodoList />
        </div>
    );
};

export default App;