import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectTodoList = state => state.todolist || initialState;

const makeSelectLoading = () =>
    createSelector(
        selectTodoList,
        globalState => globalState.todolist?.loading,
    );

export { makeSelectLoading };