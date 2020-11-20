import {
    GET_ALL_SPACEX_DATA,
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR
} from './spacex.constant';

const initStat = {
    isError: false,
    data: [],
};

export const spaceXReducer = (state = initStat, action) => {

    switch (action.type) {

        case GET_ALL_SPACEX_DATA: return { ...state, isError: false, data: action.data }

        default: return state;
    }
}