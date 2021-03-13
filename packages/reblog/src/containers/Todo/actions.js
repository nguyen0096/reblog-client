import { GET_TODO } from './constants';

export function getTodo() {
    return {
        type: GET_TODO,
    }
}