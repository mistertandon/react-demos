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

        const result = yield call(axios.get, 'https://api.spaceXdata.com/v3/launches?limit=100');

        const yearsInfo = result.data.map(spaceX => parseInt(spaceX.launch_year, 10));

        let tempUniqueYears = new Set(yearsInfo);

        let uniqueYears = [...tempUniqueYears];

        yield put(allSpaceXDataStatusSuccess(result.data, uniqueYears));
        
    } catch (error) {

        yield put(allSpaceXDataStatusError(error.message));
    }
}

export function* watcherAllSpacexData() {

    yield takeLatest(GET_ALL_SPACEX_DATA, workerAllSpacexData);
}