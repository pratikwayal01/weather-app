import React from 'react';

function Rollups({ weatherData }) {
  // Ensure weatherData and main are available before trying to access properties
  if (!weatherData || !weatherData.main) {
    return <p>Loading weather data...</p>;
  }

  const { main, weather } = weatherData;

  return (
    <div>
      <h2>Weather Rollups for {weatherData.name}</h2>
      <p>Average Temperature: {(main.temp_max + main.temp_min) / 2} °C</p>
      <p>Max Temperature: {main.temp_max} °C</p>
      <p>Min Temperature: {main.temp_min} °C</p>
      <p>Dominant Weather Condition: {weather[0]?.description || "N/A"}</p>
    </div>
  );
}

export default Rollups;
