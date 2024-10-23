import React, { useEffect } from 'react';

function Alerts({ weatherData, setAlerts }) {
  useEffect(() => {
    weatherData.forEach(city => {
      if (city.main.temp > 35) {
        setAlerts(prevAlerts => [
          ...prevAlerts,
          { city: city.name, message: 'Temperature exceeds 35°C!' }
        ]);
      }
    });
  }, [weatherData, setAlerts]);

  return (
    <div>
      <h3>Alerts</h3>
      {weatherData.map(city => (
        <div key={city.id}>
          {city.main.temp > 35 && <p>{city.name}: High temperature alert!</p>}
        </div>
      ))}
    </div>
  );
}

export default Alerts;
