// version 2 using a functional component and react hooks
import { connect } from 'react-redux';
import { loadWeather } from "../actions/actions";
import { useEffect, useState } from "react";


export default function WeatherViewV2 () {
    const [weatherData, setWeatherData] = useState([]);

    return (
    <div>
        <button onClick={loadWeather()}>Get Weather Info</button>
    </div>
)
}