import {
    FETCH_FEED_START,
    FETCH_FEED_SUCCESS,
    FETCH_FEED_FAILURE
} from './../action/fetchFeeds.action';

const initState = {
    loading: false,
    error: undefined,
    data: null
}

export const fetchFeedsReducer = (state = initState, action) => {

    switch (action.type) {

        case FETCH_FEED_START: return { ...state, loading: true };

        case FETCH_FEED_SUCCESS: return { ...state, loading: false, error: undefined, data: action.payload };

        case FETCH_FEED_FAILURE: return { ...state, loading: false, error: action.payload, data: null };

        default: return { ...state }
    }
}