import { all, call } from 'redux-saga/effects';
import { watcherFetchFeeds } from './saga/fetchFeeds.saga';

export function* rootSaga() {

    yield all([call(watcherFetchFeeds)])
}