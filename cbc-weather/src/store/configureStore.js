import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import appReducer from '../reducers/reducer'

export function configureStore(initialState) {
    const middleware = [thunk];

    const store = createStore(appReducer, initialState, applyMiddleware(...middleware));


    return store;
}