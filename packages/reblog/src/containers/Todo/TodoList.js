import React, { memo } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import useInjectReducer from 'utils/injectReducer';
import { Container } from '@mana-codebase/base';
import reducer from './reducer';
import { makeSelectLoading } from './selectors';
import { getTodo } from './actions';

const key = 'todolist';

export const TodoList = (props) => {
    useInjectReducer({ key, reducer });

    return (
        <>
            <Container>
                Nguyen
            </Container>
            <div className="todo">
                <h1>
                    Loading:
                    {' '}
                    {props.loading ? 'true' : 'false'}
                </h1>
                <Button
                    variant="contained"
                    onClick={(e) => {
                        props.onClickLoadData(e);
                    }}
                >
                    Load data

                </Button>
                <div className="todo-list">
                    Data here!
                </div>
            </div>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    loading: makeSelectLoading(),
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClickLoadData: (evt) => {
            if (evt !== undefined && evt.preventDefault) evt.preventDefault();
            dispatch(getTodo(evt));
        },
    };
};

const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
);

export default compose(
    withConnect,
    memo,
)(TodoList);
