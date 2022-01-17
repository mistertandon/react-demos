import React from 'react';

import { INCREMENT, DECREMENT } from '../helpers/counter_action_constant';

const defState = {
    count: 0
}
export const counter = (state = defState, action) => {

    switch (action.type) {
        case INCREMENT: return {
            ...state,
            count: state.count + 1
        }
            break;

        case DECREMENT: return {
            ...state,
            count: state.count - 1
        }
            break;

        default: return state;
    }
}