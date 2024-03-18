import React from "react";
import './App.css';

const WeatherApp =  () => {
    const weatherData = {
        temperature: 25, 
        conditions: "Sunny",
    };

    const threshold = 20;
    const color = weatherData.temperature > 20 ? "red" : "blue";

    return (
        <span className="weather-container">
            <h2>Weather App</h2>
            <p style={{ color }}>Temperature: {weatherData.temperature}</p>
            <p>Weather Conditions: {weatherData.conditions}</p>
        </span>
    );
};

export default WeatherApp;