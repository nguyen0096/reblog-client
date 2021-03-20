import produce from 'immer';
import { GET_TODO } from './constants';

export const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    todo: [],
};

const todoReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case GET_TODO:
            draft.loading = !state.loading;
            break;
    }
});

export default todoReducer;
