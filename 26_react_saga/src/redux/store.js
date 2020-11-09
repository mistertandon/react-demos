import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { fetchFeedsReducer } from './reducer/fetchFeeds.reducer';
import { rootSaga } from './rootSaga';

const appReducers = combineReducers({
    feeds: fetchFeedsReducer
});

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const appMiddlewares = [saga];

export const store = createStore(
    appReducers,
    applyMiddleware(...appMiddlewares)
)

saga.run(rootSaga);