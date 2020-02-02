import React from "react";
import "./assets/css/global.css";

import RouterView from "routes";
import { BrowserRouter as Router } from "react-router-dom";

import { Provider } from "react-redux";
import store from "store";

import { ThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";

export default function App() {
  const customTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#8d16e7",
        dark: "#00ff67"
      }
    }
  });

  return (
    <Provider store={store}>
      <Router>
        <ThemeProvider theme={customTheme}>
          <RouterView />
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
