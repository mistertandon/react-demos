export const FETCH_FEED_ACTIONS = {
    START = 'FETCH_FEED_START',
    SUCCESS = 'FETCH_FEED_SUCCESS',
    FAILURE = 'FETCH_FEED_FAILURE'
}
// export const FETCH_FEED_START = 'FETCH_FEED_START';

// export const FETCH_FEED_START = 'FETCH_FEED_START';
// export const FETCH_FEED_SUCCESS = 'FETCH_FEED_SUCCESS';
// export const FETCH_FEED_FAILURE = 'FETCH_FEED_FAILURE';

export const fetchFeedStart = () => {

    return {
        type: FETCH_FEED_ACTIONS.START
    }
}

export const fetchFeedSuccess = (feeds) => {

    return {
        type: FETCH_FEED_ACTIONS.SUCCESS,
        payload: feeds
    }
}

export const fetchFeedfailure = (error) => {

    return {
        type: FETCH_FEED_ACTIONS.FAILURE,
        payload: error
    }
}