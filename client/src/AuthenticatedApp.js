import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import RenderList from "./components/RenderList";
import IssueCard from "./components/IssueCard";
// const axios = require("axios");

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [punchCards, setPunchCards] = useState([]);
  const [toggleIssuingForm, setToggleIssuingForm] = useState(false);
  const [toggleCustomerList, setToggleCustomerList] = useState(false);
  const history = useHistory();

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null);
      history.push("/");
    });
  };

  const getUser = () => {
    setToggleCustomerList(!toggleCustomerList);
    setPunchCards(currentUser.punch_cards);
  };

  const displayIssuingForm = () => {
    setToggleIssuingForm(!toggleIssuingForm);
  };
  return (
    <div>
      <nav>
        <span>
          <h3>
            <Link to="/">ePUNCH</Link>
          </h3>
        </span>
        <span>
          <p>You are signed in as {currentUser.name}</p>
          <button onClick={logOut}>Logout</button>
          <button onClick={getUser}>Show list of punch cards</button>
          <button onClick>Your profile</button>
          <button onClick={displayIssuingForm}>Issue a card</button>
        </span>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/customers">
            <p>hola {currentUser.name}</p>
            {toggleCustomerList ? (
              <RenderList list={punchCards} />
            ) : (
              <div></div>
            )}
            {toggleIssuingForm ? (
              <IssueCard
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            ) : (
              <div></div>
            )}
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default AuthenticatedApp;
