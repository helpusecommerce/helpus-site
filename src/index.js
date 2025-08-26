// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";

// ⚠️ Importe o i18n antes do App, para garantir que as traduções estejam prontas
import "./i18n";

import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
