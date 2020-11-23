import {
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR,
    FILTERED_SPACEX_DATA_STATUS_ERROR,
    FILTERED_SPACEX_DATA_STATUS_SUCCESS
} from './../actions/spacex.constant';

const initStat = {
    isError: false,
    data: [],
    yearsList: []
};

export const spaceXReducer = (state = initStat, action) => {

    switch (action.type) {

        case ALL_SPACEX_DATA_STATUS_SUCCESS: return { ...state, isError: false, data: action.data, yearsList: action.yearsList }

        case ALL_SPACEX_DATA_STATUS_ERROR: return { ...state, isError: true, data: [], yearsList: [] }

        case FILTERED_SPACEX_DATA_STATUS_SUCCESS: return { ...state, isError: false, data: action.data }

        case FILTERED_SPACEX_DATA_STATUS_ERROR: return { ...state, isError: true, data: [] }

        default: return state;
    }
}