import React, { useState } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import RenderList from "./components/RenderList";
import IssueCard from "./components/IssueCard";
import CoffeeShopProfile from "./components/CoffeeShopProfile";
// const axios = require("axios");

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [punchCards, setPunchCards] = useState([]);
  const [toggleIssuingForm, setToggleIssuingForm] = useState(false);
  const [toggleCustomerList, setToggleCustomerList] = useState(false);
  const [toggleProfile, setToggleProfile] = useState(false);
  const history = useHistory();

  //LOGGING OUT USER
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setCurrentUser(null);
      history.push("/");
    });
  };
  //GETTING CARD INFORMATION FROM OUR CURRENT USER
  const getCards = () => {
    setToggleIssuingForm(false);
    setToggleProfile(false);
    setToggleCustomerList(!toggleCustomerList);
    setPunchCards(currentUser.punch_cards);
  };

  const displayIssuingForm = () => {
    setToggleCustomerList(false);
    setToggleProfile(false);
    setToggleIssuingForm(!toggleIssuingForm);
  };

  const displayProfile = () => {
    setToggleCustomerList(false);
    setToggleIssuingForm(false);
    setToggleProfile(!toggleProfile);
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
          <button className="custom-button" onClick={logOut}>
            Logout
          </button>
          <button className="custom-button" onClick={getCards}>
            Show list of punch cards
          </button>
          <button className="custom-button" onClick={displayProfile}>
            Your profile
          </button>
          <button className="custom-button" onClick={displayIssuingForm}>
            Issue a card
          </button>
        </span>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/customers">
            {toggleCustomerList ? (
              <RenderList cardsList={punchCards} />
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
            {toggleProfile ? (
              <CoffeeShopProfile currentUser={currentUser} />
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
