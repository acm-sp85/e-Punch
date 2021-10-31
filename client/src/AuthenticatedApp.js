import React from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RenderList from "./components/RenderList";
import CoffeeShopProfile from "./components/CoffeeShopProfile";
import IssueCard from "./components/IssueCard";
import Navbar from "./Navbar";

function AuthenticatedApp(currentUser, setCurrentUser) {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <Home
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/cards"
          render={(props) => (
            <RenderList
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/profile"
          render={(props) => (
            <CoffeeShopProfile
              // props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
        <Route
          exact
          path="/issue-new-card"
          render={(props) => (
            <IssueCard
              props={props}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
          )}
        />
      </Switch>
    </Router>
  );
}
export default AuthenticatedApp;
