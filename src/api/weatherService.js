import axios from 'axios';
import { cities, API_KEY } from '../config';

export const fetchWeatherData = async () => {
  const requests = cities.map(city => 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  );
  
  const responses = await Promise.all(requests);
  return responses.map(res => res.data);
};
