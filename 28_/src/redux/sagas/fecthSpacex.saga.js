import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';

import {
    GET_ALL_SPACEX_DATA
} from './../actions/spacex.constant';

import {
    allSpaceXDataStatusSuccess,
    allSpaceXDataStatusError,
    setYearsList
} from './../actions/spacex.action';

export function* workerAllSpacexData() {

    try {

        const result = yield call(axios.get, 'https://api.spacexdata.com/v3/launches?limit=100&launch_success=true');

        yield put(allSpaceXDataStatusSuccess(result.data));

        const yearsInfo = result.data.map(spaceX => parseInt(spaceX.launch_year, 10));

        let uniqueYears = new Set(yearsInfo);

        yield put(setYearsList([...uniqueYears]));

    } catch (error) {

        yield put(allSpaceXDataStatusError(error.message));
    }
}

export function* watcherAllSpacexData() {

    yield takeLatest(GET_ALL_SPACEX_DATA, workerAllSpacexData);
}