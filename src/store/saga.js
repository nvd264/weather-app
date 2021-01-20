import { put, call, takeLeading } from 'redux-saga/effects';
import { GET_CITY_WEATHER, startLoadingAction, endLoadingAction, updateCityWeatherAction } from './action';
import { searchLocationApi } from '../helpers/api';

function* getCityWeatherSaga({ payload: { cityName } }) {
  try {
    yield put(startLoadingAction());
    const cityInfo = yield call(searchLocationApi, cityName);
    yield put(updateCityWeatherAction(cityInfo));
    yield put(endLoadingAction());
  } catch (err) {
    console.error('Unexpected Error'.err);
    yield put(endLoadingAction());
  }
}

export default function* rootSaga() {
  yield takeLeading(GET_CITY_WEATHER, getCityWeatherSaga);
}
