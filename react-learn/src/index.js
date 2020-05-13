import React from "react";
import ReactDOM from "react-dom";
// import Pager from "./components/Pager"
import PagerTest from "./components/PagerTest";

ReactDOM.render(
  <React.StrictMode>
    {/* <Pager
    current={3} 
    total={100}
    limit={10}
    panelNumber={5}
    /> */}
    <PagerTest />
  </React.StrictMode>,
  document.getElementById("root")
);
