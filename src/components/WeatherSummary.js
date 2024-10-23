import React from 'react';
import WeatherSummaryCard from './WeatherSummaryCard';

const WeatherSummary = ({ weatherData }) => {
  const totalCities = weatherData.length;

  if (totalCities === 0) {
    return <p>No weather data available.</p>;
  }

  const temperatures = weatherData.map(city => city.main.temp);
  const averageTemp = (temperatures.reduce((acc, temp) => acc + temp, 0) / totalCities).toFixed(2);
  const maxTemp = Math.max(...temperatures).toFixed(2);
  const minTemp = Math.min(...temperatures).toFixed(2);

  const weatherConditions = weatherData.map(city => city.weather[0].main);
  const conditionCounts = {};

  weatherConditions.forEach(condition => {
    conditionCounts[condition] = (conditionCounts[condition] || 0) + 1;
  });

  const dominantCondition = Object.keys(conditionCounts).reduce((a, b) => 
    conditionCounts[a] > conditionCounts[b] ? a : b
  );

  return (
    <WeatherSummaryCard 
      averageTemp={averageTemp} 
      maxTemp={maxTemp} 
      minTemp={minTemp} 
      dominantCondition={dominantCondition} 
    />
  );
};

export default WeatherSummary;
