import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
import RenderList from './components/RenderList';
import CoffeeShopProfile from './components/CoffeeShopProfile';
import IssueCard from './components/IssueCard';
import Navbar from './Navbar';
import SignupCustomer from './components/SignupCustomer';

function AuthenticatedApp(currentUser, setCurrentUser, logOut) {
  return (
    <Router>
      <Navbar
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        logOut={logOut}
      />
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
        <Route
          exact
          path="/new-customer"
          render={(props) => (
            <SignupCustomer
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
