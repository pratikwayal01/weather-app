import React from 'react';
import { Line } from 'react-chartjs-2';

function TemperatureChart({ weatherData }) {
  const chartData = {
    labels: weatherData.map((entry) => new Date(entry.dt * 1000).toLocaleTimeString()),
    datasets: [
      {
        label: 'Temperature',
        data: weatherData.map((entry) => entry.main.temp),
        fill: false,
        backgroundColor: 'blue',
        borderColor: 'blue',
      },
    ],
  };

  return <Line data={chartData} />;
}

export default TemperatureChart;
