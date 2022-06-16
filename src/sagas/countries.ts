
import { fork, call, put, takeLatest } from 'redux-saga/effects';
import { ICountriesCard, ICountry, ActionsTypes, ICURRENTCODE } from '../types';

const fetchCountries = () => fetch('https://restcountries.com/v2/all?fields=name,population,region,capital,flags,alpha2Code').then(d => d.json()).then(d => d);

const fetchCountryByCode = (code: string) => {
	return fetch(`https://restcountries.com/v2/alpha/${code}`).then(d => d.json()).then(d => d);
}

function* currentCountryWorker (action: ICURRENTCODE) {
	const country: ICountry = yield call(fetchCountryByCode, action.payload);
	yield put({ type: ActionsTypes.CURRENT, payload: country });
}

function* currentCountryWatcher() {
	yield takeLatest(`${ActionsTypes.CURRENT_CODE}`, currentCountryWorker);
}

function* allCountriesUpdateWorker() {
	const countries: ICountriesCard[] = yield call(fetchCountries);
	yield put({ type: ActionsTypes.COUNTRIES, payload: countries });
}

function* allCountriesWatcherUpdate() {
	yield takeLatest(`${ActionsTypes.COUNTRIES_EMPTY}`, allCountriesUpdateWorker);
}

function* allCountriesWatcher() {
	const countries: ICountriesCard[] = yield call(fetchCountries);
	yield put({ type: ActionsTypes.COUNTRIES, payload: countries });
}

export function* rootWatcher() {
	yield fork(allCountriesWatcher);
	yield fork(currentCountryWatcher);
	yield fork(allCountriesWatcherUpdate);
}