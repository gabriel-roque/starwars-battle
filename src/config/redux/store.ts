import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import character from 'modules/character/store/character.reducer';

const reducers = combineReducers({ character });
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let composeEnhancer = compose;

if (process.env.REACT_APP_ENVIRONMENT === 'development') {
  composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
