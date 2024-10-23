import React, { useEffect } from 'react';

function Alerts({ weatherData, alerts, setAlerts }) {
  useEffect(() => {
    // Example of setting alerts when a certain condition is met
    if (weatherData.length > 0) {
      const newAlerts = weatherData.filter(city => city.main.temp > 35); // Example threshold
      setAlerts(newAlerts);
    }
  }, [weatherData, setAlerts]);

  if (!alerts || alerts.length === 0) {
    return <p>No alerts</p>; // Handle empty alerts
  }

  return (
    <div>
      <h2>Weather Alerts</h2>
      {alerts.map((alert, index) => (
        <div key={index}>
          <p>Alert for {alert.name}: Temperature exceeds threshold!</p>
        </div>
      ))}
    </div>
  );
}

export default Alerts;
