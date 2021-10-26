import React from "react";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";

function UnauthenticatedApp({ setCurrentUser }) {
  return (
    <div>
      <nav>
        <span>
          <h3>
            <Link to="/">ePUNCH</Link>
          </h3>
        </span>
        <span>
          {/* Logged in as {currentUser.username}{" "}
          <button onClick={handleLogout}>Logout</button> */}
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
