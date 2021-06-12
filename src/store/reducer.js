import {
  START_LOADING,
  END_LOADING,
  UPDATE_CITY_WEATHER,
} from './action'

const initialState = {
  weatherInfo: [],
  loading: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_LOADING: {
      return {
        ...state,
        loading: true,
      }
    }
    case END_LOADING: {
      return {
        ...state,
        loading: false,
      }
    }
    case UPDATE_CITY_WEATHER: {
      return {
        ...state,
        weatherInfo: action.payload,
      }
    }
    default:
      return state;
  }
};