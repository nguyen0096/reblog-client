import React from 'react';
import { inject, observer } from 'mobx-react';

import { Button } from '@material-ui/core';

export const TodoList = (props) => {
    const todoStore = props.appStore?.todoStore;
    const controller = todoStore?.controller;

    const handleGet = () => {
        console.log(props);
        console.log(todoStore);
        if (!controller || !todoStore) return;
        controller.getAllTodos()
    } 

    return (
        <>
            <div className="todo">
                <Button variant="contained" onClick={handleGet}>Get</Button>
                <div className="todo-list">
                    Data here!
                </div>
            </div>
        </>
    )
}

export default inject('appStore')(observer(TodoList));
