import { LOAD_WEATHER_ERROR, LOAD_WEATHER_LOADING, LOAD_WEATHER_SUCCESS } from "../actions/actions";

const initialState = {
    data: [],
    loading: false,
    error: ''
};

export default function reduxThunkReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_WEATHER_LOADING: {
            return {
                ...state,
                loading: true,
                error: ''
            };
        }
        case LOAD_WEATHER_SUCCESS: {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case LOAD_WEATHER_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
        default: {
            return state;
        }
    }
}