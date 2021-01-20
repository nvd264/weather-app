import { searchLocationUrl, getLocationInfoUrl } from './url';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const transformWeatherData = data => {
  const result = {};
  data.list.forEach(item => {
    const weatherDay = new Date(item.dt_txt);
    const itemKey = daysOfWeek[weatherDay.getDay()];
    const dateStr = `${weatherDay.getFullYear()}-${weatherDay.getMonth() + 1}-${weatherDay.getDate()}`;
    let min = item.main.temp_min;
    let max = item.main.temp_max;
    if (result[itemKey]) {
      if (result[itemKey].min > min) {
        result[itemKey].min = min;
      }
      
      if (result[itemKey].max < max) {
        result[itemKey].max = max;
      }
    } else {
      result[itemKey] = {
        min,
        max,
        icon: item.weather[0].icon,
        dateStr
      };
    }
  });
  return result;
}

export const searchLocationApi = cityName => {
  return fetch(searchLocationUrl(cityName))
    .then(response => response.json())
    .then(data => transformWeatherData(data))
    .catch(err => console.log('searchLocationApi Error', err));
}

export const getLocationInfoApi = woeid => {
  return fetch(getLocationInfoUrl(woeid))
    .then(response => response.json())
    .catch(() => []);
}