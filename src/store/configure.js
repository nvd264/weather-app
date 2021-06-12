import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    weather: rootReducer,
  }),
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
