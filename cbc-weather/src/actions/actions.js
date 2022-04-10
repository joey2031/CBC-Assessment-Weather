import Api from '../api';
export const LOAD_WEATHER_LOADING = 'LOAD_WEATHER_LOADING';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_ERROR = 'LOAD_WEATHER_ERROR';

// Working.
export const loadWeather = (location) => dispatch => {
    dispatch({ type: LOAD_WEATHER_LOADING });
    Api.getWeather(location)
        .then(response => response.json())
        .then(
            info => dispatch({ type: LOAD_WEATHER_SUCCESS, data: info }), 
            error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
 };


