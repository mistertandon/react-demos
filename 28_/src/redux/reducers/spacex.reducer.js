import {
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR,
    FILTERED_SPACEX_DATA_STATUS_ERROR,
    FILTERED_SPACEX_DATA_STATUS_SUCCESS,
    RUN_LOADER
} from './../actions/spacex.constant';

const initStat = {
    isError: false,
    isLoading: false,
    data: [],
    yearsList: []
};

export const spaceXReducer = (state = initStat, action) => {

    switch (action.type) {

        case ALL_SPACEX_DATA_STATUS_SUCCESS: return {
            ...state,
            isError: false,
            isLoading: false,
            data: action.data,
            yearsList: action.yearsList
        }

        case ALL_SPACEX_DATA_STATUS_ERROR: return {
            ...state,
            isError: true,
            isLoading: false,
            data: [],
            yearsList: []
        }

        case FILTERED_SPACEX_DATA_STATUS_SUCCESS: return {
            ...state,
            isError: false,
            isLoading: false,
            data: action.data
        }

        case FILTERED_SPACEX_DATA_STATUS_ERROR: return {
            ...state,
            isError: true,
            isLoading: false,
            data: []
        }

        case RUN_LOADER: return {
            ...state,
            isError: false,
            isLoading: true
        }

        default: return state;
    }
}