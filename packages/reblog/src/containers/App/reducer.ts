import produce from 'immer';

import { LOAD_REPOS } from './constants';

export const initialState = {
    loading: false,
    error: false,
    currentUser: false,
    userData: {
        repositories: false,
    },
};

const appReducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_REPOS:
            draft.loading = true;
            break;
    }
});

export default appReducer;
