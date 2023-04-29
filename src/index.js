import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Search from "./Search";
import App from "./App";
import Links from "./Links.js";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Search />
    <Links />
  </React.StrictMode>
);

reportWebVitals();

