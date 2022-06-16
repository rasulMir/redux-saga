import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import countryReducer from './reducer';
import { rootWatcher } from '../sagas/countries';
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
	countryReducer,
	applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const selectState = (state: RootState) => state;