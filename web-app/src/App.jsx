import React from "react";

import RouterView from "routes";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <RouterView />
    </Router>
  );
}
