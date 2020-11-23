import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_FILTERED_SPACEX_DATA
} from './../actions/spacex.constant';

import {
    filteredSpaceXDataStatusSuccess,
    filteredSpaceXDataStatusError
} from './../actions/spacex.action';

function* workerFilteredSpacexData(passedArgs) {

    try {

        const { payload: { url } } = passedArgs

        const result = yield call(axios.get, url);
        console.log('result: ',result);
        yield put(filteredSpaceXDataStatusSuccess(result.data));
    } catch (error) {

        yield put(filteredSpaceXDataStatusError(error.message));
    }
}

export function* watcherFilteredSpacexData() {

    console.log('watcher | queryString : ', arguments);

    yield takeLatest(GET_FILTERED_SPACEX_DATA, workerFilteredSpacexData, ...arguments)
}