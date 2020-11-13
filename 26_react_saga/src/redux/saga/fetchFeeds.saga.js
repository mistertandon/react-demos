// import Axios from 'axios';
import axiosConfig from './../../config/axiosConfig';
import { takeLatest, call, put } from 'redux-saga/effects';

import { FETCH_FEED_START } from './../action/fetchFeeds.action';
import { fetchFeedSuccess, fetchFeedfailure } from './../action/fetchFeeds.action';


// Worker function
function* workerFetchFeeds() {

    console.log('workerFetchFeeds: started');

    try {

        const result = yield call(axiosConfig.get, "https://picsum.photos/v2/list");

        yield put(fetchFeedSuccess(result.data));
    } catch (e) {

        yield put(fetchFeedfailure(e.message));
    }
}

// Watcher function
export function* watcherFetchFeeds() {

    yield takeLatest(FETCH_FEED_START, workerFetchFeeds);
}