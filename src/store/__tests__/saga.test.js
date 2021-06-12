import { put, call } from 'redux-saga/effects';
import { getCityWeatherSaga } from '../saga';
import { startLoadingAction, endLoadingAction, updateCityWeatherAction } from '../action';
import { searchLocationApi } from '../../helpers/api';

jest.mock('../../helpers/api', () => ({
  searchLocationApi: jest.fn(),
}));

describe('getCityWeatherSaga Saga', () => {
  it('should watch actions', () => {
    const action = {
      payload: {
        cityName: 'London'
      }
    };
    const generator = getCityWeatherSaga(action);
    
    let next = generator.next();
    expect(next.value).toEqual(
      put(startLoadingAction())
    );
    
    next = generator.next();
    expect(next.value).toEqual(
      call(searchLocationApi, 'London')
    );
    
    const apiResponse = {
      Monday: {
        min: 1,
        max: 2,
        icon: 'test'
      }
    };
    
    next = generator.next(apiResponse);
    expect(next.value).toEqual(
      put(updateCityWeatherAction(apiResponse))
    );
    
    next = generator.next();
    expect(next.value).toEqual(
      put(endLoadingAction())
    );
    
    next = generator.next();
    expect(next.value).toEqual(undefined);
  });
});