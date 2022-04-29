import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GetPastes from "./getPastes";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GetPastes />
  </React.StrictMode>,
  document.getElementById("root")
);
