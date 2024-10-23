import React, { useEffect, useState } from 'react';
import WeatherCard from './components/WeatherCard';
import WeatherSummary from './components/WeatherSummary';
import Alerts from './components/Alerts';
import { fetchWeatherData } from './api/weatherService';
import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [alerts, setAlerts] = useState([]);

  // Fetch weather data immediately on mount and every 5 minutes
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await fetchWeatherData();
        if (data) {
          setWeatherData(data);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchInitialData(); // Fetch data immediately

    const interval = setInterval(() => {
      fetchInitialData(); // Continue fetching every 5 minutes
    }, 300000); // 5 minutes interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app">
      <h1>Real-Time Weather Monitoring</h1>
      <div className="weather-cards">
        {weatherData.length > 0 ? (
          weatherData.map((city) => <WeatherCard key={city.id} cityData={city} />)
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <WeatherSummary weatherData={weatherData} />
      <Alerts weatherData={weatherData} setAlerts={setAlerts} />
    </div>
  );
}

export default App;
