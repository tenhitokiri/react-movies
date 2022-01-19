import { createStore, applyMiddleware } from "redux";
import { moviesReducer } from './reducers/moviesReducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk, logger);
const moviesStore = createStore(moviesReducer, composeWithDevTools(middleware));

export default moviesStore;

