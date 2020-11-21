import {
    GET_ALL_SPACEX_DATA,
    ALL_SPACEX_DATA_STATUS_SUCCESS,
    ALL_SPACEX_DATA_STATUS_ERROR,
    SET_YEARS_LIST
} from './spacex.constant';

export const getAllSpaceXData = () => {

    return {
        type: GET_ALL_SPACEX_DATA
    }
}

export const allSpaceXDataStatusSuccess = (data) => {

    return {
        type: ALL_SPACEX_DATA_STATUS_SUCCESS,
        data
    }
}
export const allSpaceXDataStatusError = (error) => {

    return {
        type: ALL_SPACEX_DATA_STATUS_ERROR,
        error
    }
}

export const setYearsList = (data) => {

    return {
        type: SET_YEARS_LIST,
        yearsList: data
    }
}