import { all, call } from 'redux-saga/effects';

import { watcherAllSpacexData } from './../redux/sagas/fecthSpacex.saga';
import { watcherFilteredSpacexData } from './../redux/sagas/fecthFilteredSpacex.saga';

export function* rootSaga() {

    yield all([
        call(watcherAllSpacexData),
        call(watcherFilteredSpacexData)
    ]);
}