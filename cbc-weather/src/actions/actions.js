import Api from '../api';

// Later will separate action creators
export const LOAD_WEATHER_LOADING = 'LOAD_WEATHER_LOADING';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_ERROR = 'LOAD_WEATHER_ERROR';

// Working.
export const loadWeather = (location) => dispatch => {
    // console.log(location); Will do city later
    dispatch({ type: LOAD_WEATHER_LOADING });
    Api.getWeather()
        .then(response => response.json())
        .then(
            info => dispatch({ type: LOAD_WEATHER_SUCCESS, data: info }), // at first just said data
            error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
 };


// Maybe look at these later?
// https://codesandbox.io/s/1xkqw2jp7?file=/src/actions/locations.js:508-516
// https://codesandbox.io/s/1xkqw2jp7

