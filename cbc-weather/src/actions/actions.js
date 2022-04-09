import Api from '../api';

// Later will separate action creators
export const LOAD_WEATHER_LOADING = 'LOAD_WEATHER_LOADING';
export const LOAD_WEATHER_SUCCESS = 'LOAD_WEATHER_SUCCESS';
export const LOAD_WEATHER_ERROR = 'LOAD_WEATHER_ERROR';

// V2: Get an empty array. 
export const loadWeather = city => async dispatch => {
    await dispatch({ type: LOAD_WEATHER_LOADING, city });
    try {
        const response = Api.getWeather() 
            .then(res => res.json())
            .then(x => console.log(x))
            .then(dispatch({ type: LOAD_WEATHER_SUCCESS, data: response.data }))
    } catch (err) {
        return dispatch({ type: LOAD_WEATHER_ERROR, err, city })
    }
};



//V1: Get Cannot read properties of undefined (reading 'map') error in WeatherView
// export const loadWeather = () => dispatch => {
//     dispatch({ type: LOAD_WEATHER_LOADING });
//    const response = Api.getWeather()
//         .then(response => response.json())
//         .then(x => console.log(x))
//         .then(
//             data => dispatch({ type: LOAD_WEATHER_SUCCESS, data: response.data }), // data: [...res.data]??
//             error => dispatch({ type: LOAD_WEATHER_ERROR, error: error.message || 'Unexpected Error!!!' })
//         )
// };




// Maybe look at these later?
// https://codesandbox.io/s/1xkqw2jp7?file=/src/actions/locations.js:508-516
// https://codesandbox.io/s/1xkqw2jp7
