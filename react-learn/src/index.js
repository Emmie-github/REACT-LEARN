import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getStudents } from "./services/student";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
getStudents().then(data => console.log(data));
