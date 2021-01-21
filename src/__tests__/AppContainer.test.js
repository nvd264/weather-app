import { mapStateToProps, mapDispatchToProps } from '../AppContainer';

describe('App Container', () => {
  it('should pass the props and state to the component', () => {
    const state = {
      weather: {
        weatherInfo: {
          data: {
            Monday: {
              min: 2,
              max: 3,
              icon: 'test',
              dateStr: '2021-1-21'
            },
          },
        },
        loading: false,
      },
      
    };
    const expected = {
      weatherList: {
        Monday: {
          min: 2,
          max: 3,
          icon: 'test',
          dateStr: '2021-1-21'
        },
      },
      loading: false,
    };

    const actual = mapStateToProps(state);

    expect(actual).toEqual(expected);
  });

  it('should dispatch the get weather action', () => {
    const dispatch = jest.fn();

    const dispatchToProps = mapDispatchToProps(dispatch);
    const expected = {
      type: 'GET_CITY_WEATHER',
      payload: {
        cityName: 'London'
      },
    };

    dispatchToProps.getWeatherInfo('London');

    expect(dispatch).toHaveBeenCalledWith(expected);
  });
});
