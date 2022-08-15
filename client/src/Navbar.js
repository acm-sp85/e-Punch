import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const navbar = ({ currentUser }) => {
  return (
    <div className="centered">
      <h1 className="logo">ePUNCH</h1>
      <li className="navbar">
        <Link to="/">HOME</Link>
      </li>
      <li className="navbar">
        <Link to="/profile">PROFILE</Link>
      </li>
      <li className="navbar">
        <Link to="/cards">CLIENTS</Link>
      </li>
      <li className="navbar">
        <Link to="/issue-new-card">NEW CARD</Link>
      </li>

      <button className="custom-button" onClick={currentUser.logOut}>
        LOG OUT
      </button>
    </div>
  );
};
export default navbar;
