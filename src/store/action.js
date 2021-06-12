export const START_LOADING = 'START_LOADING';
export const END_LOADING = 'END_LOADING';
export const GET_CITY_WEATHER = 'GET_CITY_WEATHER';
export const UPDATE_CITY_WEATHER = 'UPDATE_CITY_WEATHER';

export const startLoadingAction = () => ({
  type: START_LOADING
});

export const endLoadingAction = () => ({
  type: END_LOADING
});

export const getCityWeatherAction = cityName => ({
  type: GET_CITY_WEATHER,
  payload: {
    cityName
  }
});

export const updateCityWeatherAction = data => ({
  type: UPDATE_CITY_WEATHER,
  payload: {
    data
  }
});