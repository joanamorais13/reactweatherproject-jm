import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    if (response.data && response.data.daily) {
      setForecast(response.data.daily);
    } else {
      console.error("Invalid forecast data received");
      setForecast([]);
    }
    setLoaded(true);
  }

  function load() {
    let apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse).catch(function(error) {
      console.error("Weather forecast API error:", error);
      setForecast([]); // Set empty array instead of keeping null
      setLoaded(true); // Still show the main weather even if forecast fails
    });
  }

  if (loaded && forecast) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    if (!loaded) {
      load();
    }
    return null;
  }
}