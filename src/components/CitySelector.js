import React from 'react';

const CitySelector = ({ selectedCity, setSelectedCity }) => {
  return (
    <div>
      <label htmlFor="city-select">Select a city:</label>
      <select
        id="city-select"
        value={selectedCity}
        onChange={(e) => setSelectedCity(e.target.value)}
      >
        <option value="">--Select a City--</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        {/* Add more city options here */}
      </select>
    </div>
  );
};

export default CitySelector;
