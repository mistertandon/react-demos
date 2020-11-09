import { FETCH_FEED_ACTIONS } from './../action/fetchFeeds.action';

const initState = {
    loading: false,
    error: undefined,
    data: null
}

export const fetchFeedsReducer = (state = initState, action) => {

    switch (action.type) {

        case FETCH_FEED_ACTIONS.START: return { ...state, loading: true };

        case FETCH_FEED_ACTIONS.SUCCESS: return { ...state, loading: false, error: undefined, data: action.payload };

        case FETCH_FEED_ACTIONS.FAILURE: return { ...state, loading: false, error: payload, data: null };

        default: return {...state}
    }
}