import {
    GET_ALL_SPACEX_DATA,
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR,
    GET_FILTERED_SPACEX_DATA,
    FILTERED_SPACEX_DATA_STATUS_ERROR,
    FILTERED_SPACEX_DATA_STATUS_SUCCESS,
    // SET_YEARS_LIST
} from './spacex.constant';

export const getAllSpaceXData = () => {

    return {
        type: GET_ALL_SPACEX_DATA
    }
}

export const allSpaceXDataStatusSuccess = (data, yearsList) => {

    return {
        type: ALL_SPACEX_DATA_STATUS_SUCCESS,
        data,
        yearsList
    }
}

export const allSpaceXDataStatusError = (error) => {

    return {
        type: ALL_SPACEX_DATA_STATUS_ERROR,
        error
    }
}

export const getFilteredSpaceXData = (url) => {

    return {

        type: GET_FILTERED_SPACEX_DATA,
        payload: {
            url
        }
    }
}

export const filteredSpaceXDataStatusSuccess = (data) => {

    return {
        type: FILTERED_SPACEX_DATA_STATUS_SUCCESS,
        data
    }
}

export const filteredSpaceXDataStatusError = (error) => {

    return {
        type: FILTERED_SPACEX_DATA_STATUS_ERROR,
        error
    }
}