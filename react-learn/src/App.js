import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          {/* 登录页面 */}
          <Route path="/login" exact component={Login} />
          {/* 后台页面 */}
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    </div>
  );
}
