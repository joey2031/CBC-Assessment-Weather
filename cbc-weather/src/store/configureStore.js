import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import reduxThunkReducer from '../reducers/reducer'

export function configureStore(initialState) {
    const middleware = [thunk];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reduxThunkReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

    return store;
}