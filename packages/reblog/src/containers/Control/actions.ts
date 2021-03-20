import { TOGGLE } from './constants';

export function toggle(value?: boolean) {
    return {
        type: TOGGLE,
        value,
    };
}
