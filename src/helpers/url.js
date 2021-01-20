const API_KEY = '8adca0323f4d655d453909356a7a86bb';
const WEATHER_DOMAIN = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}&units=metric`;

export const searchLocationUrl = cityName => `${WEATHER_DOMAIN}&q=${cityName}`;

export const getLocationInfoUrl = woeid => `${WEATHER_DOMAIN}/location/${woeid}`;