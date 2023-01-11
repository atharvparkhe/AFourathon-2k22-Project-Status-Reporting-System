import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./helpers/theme";
import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <BrowserRouter>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            <App />
          </MantineProvider>
        </BrowserRouter>
  </React.StrictMode>

);
