import createSagaMiddleware from 'redux-saga';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';

import { rootSaga } from './rootSaga';
import { spaceXReducer } from './reducers/spacex.reducer';

const rootReducers = combineReducers({ spacex: spaceXReducer });

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const saga = createSagaMiddleware();

const appMiddlewares = [saga];

export const store = createStore(
    rootReducers,
    composeEnhancer(applyMiddleware(...appMiddlewares))
);

saga.run(rootSaga);