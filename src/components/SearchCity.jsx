import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchCity = ({ onSearch }) => {
  const [cityName, setCityName] = useState('');
  
  const handleSearchWeather = e => {
    if (e.key === 'Enter' && cityName) {
      onSearch(cityName);
    }
  };
  
  return (
    <div className="search-box">
      <input
        aria-label="search-input"
        onChange={(e) => setCityName(e.target.value)}
        onKeyPress={handleSearchWeather}
        type="text"
        className="form-control"
        id="cityName"
        placeholder="City name..."
        value={cityName}
      />
      {cityName && <span>&#9166; Enter</span>}
    </div>  
  )
};

SearchCity.propTypes = {
  onSearch: PropTypes.func.isRequired,
}

export default SearchCity;