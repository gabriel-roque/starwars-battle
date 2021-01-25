import 'assets/css/global.css';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { store } from 'config';
// import Audio from 'modules/core/audio/audio.component';
import RouterView from 'routes';

export default function App() {
  return (
    <Provider store={store}>
      {/* <Audio /> */}
      <Router>
        <RouterView />
      </Router>
    </Provider>
  );
}
