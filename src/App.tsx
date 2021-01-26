import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { LoadingCircle } from 'components/loading-circle/loading.componet';

import { store, router as RouterView } from 'config';

import 'assets/css/global.css';

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Suspense fallback={<LoadingCircle />}>
          <RouterView />
        </Suspense>
      </Router>
    </Provider>
  );
}
