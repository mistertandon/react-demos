import React from 'react';

import { INCREMENT, DECREMENT } from '../helpers/counter_action_constant';

export const increaseCountByOne = () => {
    return {
        type: INCREMENT
    }
}

export const decreaseCountByOne = () => {
    return {
        type: DECREMENT
    }
}