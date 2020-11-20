import Axios from 'axios';
import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_ALL_SPACEX_DATA
} from './../actions/spacex.constant';

import {
    allSpaceXDataStatusSuccess,
    allSpaceXDataStatusError
} from './../actions/spacex.action';

export function* workerAllSpacexData() {

    try {

        const result = yield axios.get('https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');

        console.log('gotcha', result);
        yield put(allSpaceXDataStatusSuccess(result));

    } catch (error) {

        yield put(allSpaceXDataStatusError(eror.message));
    }
}

export function* watcherAllSpacexData() {

    yield takeLatest(GET_ALL_SPACEX_DATA, workerAllSpacexData);
}