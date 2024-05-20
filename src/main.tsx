import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

import { MantineProvider } from "@mantine/core";

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>

    <MantineProvider>
      <Router>
        <AppRouter />
      </Router>
    </MantineProvider>
    </Provider>

  </React.StrictMode>
);
