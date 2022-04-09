import Api from '../api';

// Later will separate action creators
export const LOAD_WEATHER_LOADING = 'REDUX_THUNK_LOAD_WEATHER_LOADING';
export const LOAD_WEATHER_SUCCESS = 'REDUX_THUNK_LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_ERROR = 'REDUX_THUNK_LOAD_WEATHER_ERROR';

export const loadWeather = () => dispatch => {
    dispatch({ type: LOAD_WEATHER_LOADING });
    Api.getWeather()
        .then(response => response.json())
        .then(x => console.log(x))
        .then(
            data => dispatch({ type: LOAD_WEATHER_SUCCESS, data }),
            error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unexpected Error!!!' })
        )
};