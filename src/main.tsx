import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/AppRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
    <Router>
      <AppRouter/>
    </Router>
    </MantineProvider>
  </React.StrictMode>
);
