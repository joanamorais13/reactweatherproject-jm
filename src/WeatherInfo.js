
import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row mt-3">
        <div className="col-md-6">
          <div className="city-info-block">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                <FormattedDate date={props.data.date} />
              </li>
              <li className="text-capitalize">{props.data.description}</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <div className="weather-data-block">
            <div className="d-flex weather-icon-container justify-content-center mb-3">
              <div>
                <WeatherIcon code={props.data.icon} size={52} />
              </div>
              <div>
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
            </div>
            <div className="weather-details">
              <ul>
                <li>Humidity: {props.data.humidity}%</li>
                <li>Wind: {props.data.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
