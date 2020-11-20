import {
    GET_SPACEX_DATA_ALL,
    GET_SPACEX_DATA_STATUS_SUCCESS,
    GET_SPACEX_DATA_STATUS_ERROR
} from './spacex.constant';

export const getSpaceXDataAll = () => {

    return {
        type: GET_SPACEX_DATA_ALL
    }
}

export const fecthSpaceXSuccess = (data) => {

    return {
        type: GET_SPACEX_DATA_STATUS_SUCCESS,
        data
    }
}
export const fecthSpaceXError = (error) => {

    return {
        type: GET_SPACEX_DATA_STATUS_ERROR,
        error
    }
}