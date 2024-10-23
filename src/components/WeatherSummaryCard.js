import React from 'react';
import './WeatherSummaryCard.css'; // Importing CSS file for styling

const WeatherSummaryCard = ({ averageTemp, maxTemp, minTemp, dominantCondition }) => {
  return (
    <div className="weather-summary-card">
      <h2 className="summary-title">Overall Weather Summary</h2>
      <div className="summary-metrics">
        <div className="metric">
          <h3>Average Temperature</h3>
          <p>{averageTemp} °C</p>
        </div>
        <div className="metric">
          <h3>Maximum Temperature</h3>
          <p>{maxTemp} °C</p>
        </div>
        <div className="metric">
          <h3>Minimum Temperature</h3>
          <p>{minTemp} °C</p>
        </div>
        <div className="metric">
          <h3>Dominant Weather Condition</h3>
          <p>{dominantCondition}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherSummaryCard;
