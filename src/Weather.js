import React, { use, useState } from "react";
import axios from "axios";
import "./Weather.css"
import FormattedDate from "./FormattedDate";


export default function Weather (props){
    
    const [weatherData, setWeatherData]=useState({ready:false});


    function handleResponse (response){
        setWeatherData ({
            ready:true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.main.wind.speed,
            city: response.data.name,
        });
        
    }

    if (weatherData.ready){
        return(
        <div className="weather">
            <form>
                <div className="row">
                    <div className="col-9">
                <input type="search" placeholder="Enter a city..."  className="form-control" autoFocus="on"/>
                </div>
                 <div className="col-3">
                <input type="submit" value="search" className="btn btn-primary w-100" /></div>
                </div>
            </form>
            <div className="main-city">
                <h1>{weatherData.city}</h1>
            <ul>
                <li><FormattedDate date={weatherData.date}/></li>
                <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            </div>
            
            <div className="row">
            <div className="col-6">
                <div className="clearfix">
                <img src= {weatherData.icon} alt={weatherData.description} className="float-start"  />
                <div className="float-start">
                <span className="temperature">{Math.round(weatherData.temperature)}</span> 
                <span className="unit">C°</span> 
           </div>
           </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 15%
                    </li>
                    <li>Humidity {weatherData.humidity}</li>
                    <li>Wind: {weatherData.wind}</li>
                </ul>
            </div>
            </div>
        </div>)

    }
    else{
    const apiKey = "16fb2o2e0345actc8844b4d07e81636f";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)

    return "Loading..."

    }
}