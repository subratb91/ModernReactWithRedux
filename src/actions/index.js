import axios from 'axios';

const API_KEY = '10ce9a3512cf50a19c54171440248f1f';
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const COUNTRY_CODE = 'us';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},${COUNTRY_CODE}`;
  const request = axios.get(url);
  //console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
