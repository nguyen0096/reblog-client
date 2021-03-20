import produce from 'immer';

import { TOGGLE } from './constants';

export const initialState = {
    // Operational
    isOpen: false,
};

const sideMenuReducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case TOGGLE:
            if (action.value === undefined) {
                draft.isOpen = !state.isOpen;
            } else {
                draft.isOpen = action.value;
            }
            break;
    }
});

export default sideMenuReducer;
