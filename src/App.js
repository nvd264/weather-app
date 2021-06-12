import PropTypes from 'prop-types';
import './App.css';

import SearchCity from './components/SearchCity';
import WeatherDay from './components/WeatherDay';
import Loading from './components/Loading';

function App({ loading, weatherList, getWeatherInfo }) {
  return (
    <div className="App">
      <div className="container">
        <h2 className="app-title">Weather App</h2>
        <SearchCity onSearch={getWeatherInfo} />
        {loading ? <Loading /> : (
          <div className="weather-row">
            {Object.keys(weatherList || {}).map(key =>
              <WeatherDay
                key={key}
                label={key}
                data={weatherList[key]}
              />
            )}
          </div>
        )}
        {!loading && !weatherList && <p>No data found</p>}
      </div>
    </div>
  );
}

App.propTypes = {
  weatherList: PropTypes.shape({}),
  loading: PropTypes.bool,
  getWeatherInfo: PropTypes.func.isRequired,
}

App.defaultProps = {
  weatherList: null,
  loading: false,
}

export default App;
