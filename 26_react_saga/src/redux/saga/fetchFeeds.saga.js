import { Axios } from 'axios';
import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_FEED_ACTIONS } from './../action/fetchFeeds.action';
import { fetchFeedSuccess, fetchFeedfailure } from './../action/fetchFeeds.action';


// Worker function
function* workerFetchFeeds() {

    try {

        const result = yield call(Axios.get, "https://picsum.photos/v2/list");

        yield put(fetchFeedSuccess(result.data));
    } catch (e) {

        yield put(fetchFeedfailure(e.message));
    }
}

// Watcher function
export function* watcherFetchFeeds() {

    yield takeLatest(FETCH_FEED_ACTIONS.START, workerFetchFeeds);
}