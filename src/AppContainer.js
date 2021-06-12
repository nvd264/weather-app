import { connect } from 'react-redux';
import App from './App';
import { getCityWeatherAction } from './store/action';

export const mapStateToProps = ({ weather }) => ({
  weatherList: weather.weatherInfo.data,
  loading: weather.loading,
});

export const mapDispatchToProps = dispatch => ({
  getWeatherInfo: cityName => dispatch(getCityWeatherAction(cityName)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);