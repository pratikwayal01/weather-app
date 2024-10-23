export const calculateDailySummary = (weatherData) => {
    let maxTemp = -Infinity;
    let minTemp = Infinity;
    let totalTemp = 0;
  
    weatherData.forEach((data) => {
      const tempCelsius = data.main.temp - 273.15;
      totalTemp += tempCelsius;
      if (tempCelsius > maxTemp) maxTemp = tempCelsius;
      if (tempCelsius < minTemp) minTemp = tempCelsius;
    });
  
    return {
      maxTemp: maxTemp.toFixed(2),
      minTemp: minTemp.toFixed(2),
      avgTemp: (totalTemp / weatherData.length).toFixed(2),
    };
  };
  