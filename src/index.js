import React from "react";
import ReactDOM from "react-dom/client";
import "./global.css";
import Body from "./App.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>
);