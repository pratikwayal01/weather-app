import React from 'react';
import './WeatherCard.css';

function WeatherCard({ cityData }) {
  const { name, main, weather, wind, dt } = cityData;

  // Convert timestamp to a readable date and time
  const date = new Date(dt * 1000);
  const formattedDate = date.toLocaleDateString();
  const formattedTime = date.toLocaleTimeString();

  // Get the icon code from the weather data
  const iconCode = weather[0].icon; // e.g., "10n"
  
  // Construct the path to the SVG file
  const iconPath = `/svg/${iconCode}.svg`; // Assuming SVG files are named as icon codes

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <p>{formattedDate} {formattedTime}</p> {/* Display date and time */}
      <img 
        src={iconPath} 
        alt={weather[0].description} 
        className="weather-icon"
        onError={(e) => { e.target.onerror = null; e.target.src = "/svg/default.svg"; }} // Fallback to default icon
      />
      <p>Weather: {weather[0].main} </p> {/* Main weather and description */}
      <p>Temperature: {main.temp}°C</p> {/* Current temperature */}
      <p>Feels Like: {main.feels_like}°C</p> {/* Feels like temperature */}
      <p>Max Temp: {main.temp_max}°C</p> {/* Maximum temperature */}
      <p>Min Temp: {main.temp_min}°C</p> {/* Minimum temperature */}
      <p>Pressure: {main.pressure} hPa</p> {/* Pressure */}
      <p>Humidity: {main.humidity}%</p> {/* Humidity */}
      <p>Wind Speed: {wind.speed} m/s</p> {/* Wind speed */}
    </div>
  );
}

export default WeatherCard;
