import React from "react";
import ReactDOM from "react-dom";
// import Ball from "./components/Ball";
import BallList from "./components/BallList";

ReactDOM.render(
  <React.StrictMode>
    {/* <Ball bg="#f40" xSpeed={100} ySpeed={100} left={100} top={100} /> */}
    <BallList />
  </React.StrictMode>,
  document.getElementById("root")
);
