import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_FILTERED_SPACEX_DATA
} from './../actions/spacex.constant';

function* workerFilteredSpacexData(passedArgs) {

    const { payload: { url } } = passedArgs

    const result = yield call(axios.get, url);

    console.log('result.data: ', result.data);
}

export function* watcherFilteredSpacexData() {

    console.log('watcher | queryString : ', arguments);

    yield takeLatest(GET_FILTERED_SPACEX_DATA, workerFilteredSpacexData, ...arguments)
}