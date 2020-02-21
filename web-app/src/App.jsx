import React from 'react';
import 'assets/css/global.css';

import RouterView from 'routes';
import { BrowserRouter as Router } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from 'store';

import Audio from 'modules/core/audio/audio.component';

export default function App() {
  return (
    <Provider store={store}>
      <Audio />
      <Router>
        <RouterView />
      </Router>
    </Provider>
  );
}
