import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_FILTERED_SPACEX_DATA
} from './../actions/spacex.constant';

// function* workerFilteredSpacexData(queryString) {
function* workerFilteredSpacexData() {

    console.log('queryString: ');
}

export function* watcherFilteredSpacexData() {

    console.log('watcher | queryString : ', arguments);
    // yield takeLatest(GET_FILTERED_SPACEX_DATA, workerFilteredSpacexData(queryString))
    yield takeLatest(GET_FILTERED_SPACEX_DATA, workerFilteredSpacexData)
}