import React from 'react';

function WeatherSummary({ weatherData }) {
  if (!weatherData || weatherData.length === 0) {
    return <p>No weather data available</p>; // Add a fallback
  }

  return (
    <div>
      <h2>Daily Weather Summary</h2>
      {weatherData.map((city, index) => (
        <div key={index}>
          <p>{city.name}</p>
          {/* Display more weather information */}
        </div>
      ))}
    </div>
  );
}

export default WeatherSummary;
