import Api from '../api';
import {
    LOAD_WEATHER_LOADING,
    LOAD_WEATHER_SUCCESS,
    LOAD_WEATHER_ERROR
} from './loadWeatherStatus'

export const loadWeather = (location) => dispatch => {
    dispatch({ type: LOAD_WEATHER_LOADING });
    Api.getWeather(location)
        .then(response => response.json())
        .then(
            info => dispatch({ type: LOAD_WEATHER_SUCCESS, data: info }), 
            error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unknown Error' })
        )
 };
