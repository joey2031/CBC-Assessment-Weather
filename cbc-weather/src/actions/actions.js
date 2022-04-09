import Api from '../api';

// Later will separate action creators
export const LOAD_WEATHER_LOADING = 'LOAD_WEATHER_LOADING';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_ERROR = 'LOAD_WEATHER_ERROR';

export const loadWeather = () => dispatch => {
    dispatch({ type: LOAD_WEATHER_LOADING });
    Api.getWeather()
        .then(response => response.json())
        .then(x => console.log(x))
        .then(
            data => dispatch({ type: LOAD_WEATHER_SUCCESS, data: data.data }), // data: [...res.data]??
            error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};


// Maybe look at these later?
// https://codesandbox.io/s/1xkqw2jp7?file=/src/actions/locations.js:508-516
// https://codesandbox.io/s/1xkqw2jp7
