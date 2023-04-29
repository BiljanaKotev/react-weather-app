import React, { useState } from "react";
import { SpinnerCircular } from "spinners-react";
import axios from "axios";
import "./Search.css";

export default function Search(props) {
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [temperature, setTemperature] = useState({});

  function showTemperature(response) {
    setSubmitted(true);

    setTemperature({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: Math.round(response.data.main.humidity),
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "c119ffef35b7245a5e03b6e5724ae961";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(url)
      .then(showTemperature)
      .catch((error) => {
        alert("An error occurred. Please try again later.");
      });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (submitted) {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a city.." onChange={updateCity} />
          <button type="Submit">Search</button>
        </form>
        <ul>
          <li>Temperature: {temperature.temperature}°C</li>
          <li>Description: {temperature.description}</li>
          <li>Humidity: {temperature.humidity}%</li>
          <li>Wind: {temperature.wind} km/h</li>
          <li>
            <img src={temperature.icon} alt={temperature.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={handleSubmit}>
          <input type="search" placeholder="Enter a city.." onChange={updateCity} />
          <button type="Submit">Search</button>
        </form>

        {/* <SpinnerCircular /> */}
      </div>
    );
  }
}
