// utils/aggregateWeatherData.js

export const calculateDailyAggregates = (weatherData) => {
    const dailyData = {};
  
    weatherData.forEach(city => {
      const date = new Date(city.dt * 1000).toLocaleDateString();
      
      if (!dailyData[date]) {
        dailyData[date] = {
          totalTemp: 0,
          maxTemp: -Infinity,
          minTemp: Infinity,
          weatherConditionCounts: {},
          count: 0,
        };
      }
  
      const temp = city.main.temp;
      dailyData[date].totalTemp += temp;
      dailyData[date].maxTemp = Math.max(dailyData[date].maxTemp, temp);
      dailyData[date].minTemp = Math.min(dailyData[date].minTemp, temp);
      dailyData[date].count += 1;
  
      const condition = city.weather[0].main;
      dailyData[date].weatherConditionCounts[condition] =
        (dailyData[date].weatherConditionCounts[condition] || 0) + 1;
    });
  
    return Object.keys(dailyData).map((date) => {
      const dayData = dailyData[date];
      const avgTemp = (dayData.totalTemp / dayData.count).toFixed(2);
      const dominantCondition = Object.keys(dayData.weatherConditionCounts).reduce(
        (a, b) => (dayData.weatherConditionCounts[a] > dayData.weatherConditionCounts[b] ? a : b)
      );
  
      return {
        date,
        avgTemp,
        maxTemp: dayData.maxTemp,
        minTemp: dayData.minTemp,
        dominantCondition,
      };
    });
  };
  