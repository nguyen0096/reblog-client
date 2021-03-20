import { createSelector } from 'reselect';
// import { initialState } from './reducer';

const selectTodoList = (state) => state.todolist;

const makeSelectLoading = () => createSelector(
    selectTodoList,
    (todolist) => todolist?.loading,
);

export { makeSelectLoading };
