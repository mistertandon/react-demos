import {
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR,
    SET_YEARS_LIST
} from './../actions/spacex.constant';

const initStat = {
    isError: false,
    data: [],
    yearsList: []
};

export const spaceXReducer = (state = initStat, action) => {

    switch (action.type) {

        case ALL_SPACEX_DATA_STATUS_SUCCESS: return { ...state, isError: false, data: action.data, yearsList: action.yearsList }

        case SET_YEARS_LIST: return { ...state, isError: false, yearsList: action.yearsList }

        case ALL_SPACEX_DATA_STATUS_ERROR: return { ...state, isError: true, data: [], yearsList: [] }

        default: return state;
    }
}