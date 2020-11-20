import { all, call } from 'redux-saga/effects';

import { watcherAllSpacexData } from './../redux/sagas/fecthSpacex.saga';

export function* rootSaga() {

    yield all([call(watcherAllSpacexData)]);
}