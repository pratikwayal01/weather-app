import axios from 'axios';
import { cities, API_KEY } from '../config';

// Fetch weather data for all cities
export const fetchWeatherData = async () => {
  const requests = cities.map(city => 
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
  );

  const responses = await Promise.all(requests);
  return responses.map(res => res.data);
};

// Fetch weather data for a specific city
export const fetchWeatherDataByCity = async (city) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error(`Error fetching weather data for ${city}:`, error);
    throw error; // Re-throw the error for further handling if needed
  }
};
