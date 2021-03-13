import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import reducer from './reducer';
import { makeSelectLoading } from './selectors';
import { getTodo } from './actions';

const key = 'todolist';

export const TodoList = (props) => {
    console.log("Props: " + JSON.stringify(props));
    useInjectReducer({ key, reducer });

    return (
        <>
            <div className="todo">
                <h1>Loading: {props.loading ? 'true' : 'false'}</h1>
                <Button variant="contained" onClick={(e) => {
                    console.log(props.onClickLoadData);
                    props.onClickLoadData(e);
                }}>Load data</Button>
                <div className="todo-list">
                    Data here!
                </div>
            </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
});

// const mapStateToProps = (state) => {
//     console.log(state);
//     return {
//         loading: state.todolist?.loading,
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        onClickLoadData: evt => {
            console.log("onClickLoadData");
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(getTodo(evt));
        },
    };
}


const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(TodoList);

