import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/rolls" component={RollsContainer} /> */}
        {/* <Route exact path="/rolls/new" component={NewRollForm} />
      <Route exact path="/rolls/new/:id" component={NewRollForm} />
      <Route exact path="/rolls/:id" component={RollDetails} /> */}
      </Switch>
    </Router>
  );
}

export default App;
