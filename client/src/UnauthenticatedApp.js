import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div>
      <nav>
        <span>
          <h1 className="logo">ePUNCH</h1>
        </span>
      </nav>
      <Switch>
        <Route exact path="/">
          <Login setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Signup setCurrentUser={setCurrentUser} />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default UnauthenticatedApp;
