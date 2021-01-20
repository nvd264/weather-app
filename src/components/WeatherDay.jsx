import React from 'react';

const WeatherDay = ({ label, data }) => {
  return (
    <div className="card-deck">
      <div className="card bg-default">
        <div className="card-body">
          <h5 className="card-title">{label}</h5>
          <h6>{data.dateStr}</h6>
          <img src={`http://openweathermap.org/img/wn/${data.icon}@2x.png`} alt={`Weather on ${data.dateStr}`} />
          <p className="card-text">{Math.round(data.min)}&#176; - {Math.round(data.max)}&#176;</p>
        </div>
      </div>
    </div>
  )
};

export default WeatherDay;