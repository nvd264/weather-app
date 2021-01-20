import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getCityWeatherAction } from '../store/action';

const SearchCity = ({ getWeatherInfo }) => {
  const [cityName, setCityName] = useState('');
  
  const handleSearchWeather = e => {
    if (e.key === 'Enter') {
      getWeatherInfo(cityName);
    }
  };
  
  return (
    <div className="search-box">
      <input onChange={(e) => setCityName(e.target.value)} onKeyPress={handleSearchWeather} type="text" className="form-control" id="cityName" placeholder="City name..." />
      {cityName && <span>&#9166; Enter</span>}
    </div>  
  )
};

const mapDispatchToProps = (dispatch) => ({
  getWeatherInfo: cityName => dispatch(getCityWeatherAction(cityName)),
});

export default connect(null, mapDispatchToProps)(SearchCity);