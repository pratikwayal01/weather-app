import React, { useEffect, useState } from "react";
import WeatherCard from "./components/WeatherCard";
import WeatherSummary from "./components/WeatherSummary";
import Alerts from "./components/Alerts";
import { fetchWeatherData } from "./api/weatherService"; // Your service for fetching weather data
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState([]); // State for weather data
  const [alerts, setAlerts] = useState([]); // State for alerts

  // Fetch weather data immediately on mount and every 5 minutes
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await fetchWeatherData(); // Fetch weather data for multiple cities
        if (data) {
          setWeatherData(data); // Update state with the fetched data
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchInitialData(); // Fetch data immediately

    const interval = setInterval(() => {
      fetchInitialData(); // Continue fetching data every 5 minutes
    }, 300000); // 5 minutes interval

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  return (
    <div className="app">
      <h1>Real-Time Weather Monitoring</h1>
      <div className="weather-cards">
        {weatherData.length > 0 ? (
          weatherData.map((city) => (
            <WeatherCard key={city.id} cityData={city} /> // Render a card for each city's weather data
          ))
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <WeatherSummary weatherData={weatherData} />{" "}
      {/* Summary of the weather data */}
      <Alerts weatherData={weatherData} setAlerts={setAlerts} />{" "}
      {/* Alerts section */}
    </div>
  );
}

export default App;
