import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Replace with your OpenWeatherMap API Key
const API_KEY = 'your_openweathermap_api_key';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch the weather data from OpenWeatherMap API
  const fetchWeatherData = async (cityName) => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching weather data');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData(city);
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = () => {
    if (city) {
      fetchWeatherData(city);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
