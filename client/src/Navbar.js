import React from "react";
import { Link, useHistory } from "react-router-dom";
const navbar = () => {
  const history = useHistory();
  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
      history.push("/");
    });
  };
  return (
    <div>
      <h1 className="logo">ePUNCH</h1>
      <li className="navbar">
        <Link to="/">HOME</Link>
      </li>
      <li className="navbar">
        <Link to="/cards">PUNCH CARDS</Link>
      </li>
      <li className="navbar">
        <Link to="/profile">PROFILE</Link>
      </li>
      <li className="navbar">
        <Link to="/issue-new-card">NEW CARD</Link>
      </li>
      <button className="custom-button" onClick={logOut}>
        LOG OUT
      </button>
    </div>
  );
};
export default navbar;
