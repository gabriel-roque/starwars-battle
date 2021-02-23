import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import player from 'modules/player/store/player.reducer';

const reducers = combineReducers({ player });
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
