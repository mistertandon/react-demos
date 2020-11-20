import {
    GET_SPACEX_DATA_ALL,
    GET_SPACEX_DATA_STATUS_SUCCESS,
    GET_SPACEX_DATA_STATUS_ERROR
} from './spacex.constant';

const initStat = {
    isError: false,
    data: [],
};

export const spaceXReducer = (state = initStat, action) => {

    switch (action.type) {

        case GET_SPACEX_DATA_STATUS_SUCCESS: return { ...state, isError: false, data: action.data }

        default: return state;
    }
}