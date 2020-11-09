import {
    FETCH_FEED_START,
    FETCH_FEED_SUCCESS,
    FETCH_FEED_FAILURE
} from './../action/fetchFeeds.action';

const initState = {
    loading: false,
    error: {
        isError: false,
        error: undefined,
    },
    data: []
}

export const fetchFeedsReducer = (state = initState, action) => {

    switch (action.type) {

        case FETCH_FEED_START: return {
            ...state,
            loading: true,
            error: {
                isError: false,
                error: undefined,
            }
        };

        case FETCH_FEED_SUCCESS:
            return {
                ...state,
                loading: false,
                error: {
                    isError: false,
                    error: undefined,
                },
                data: action.payload
            };

        case FETCH_FEED_FAILURE:
            return {
                ...state,
                loading: false,
                error: {
                    isError: true,
                    error: action.payload,
                },
                data: []
            };

        default: return { ...state }
    }
}