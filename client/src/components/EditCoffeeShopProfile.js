import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

function Signup({ currentUser }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Let get ready to rumble");
    // const requestOptions = {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     user_name: email,
    //     password,
    //     passwordConfirmation,
    //     name,
    //     address,
    //     description,
    //     contact,
    //   }),
    // };

    // fetch("/coffee_shops", requestOptions).then((response) => {
    //   if (response.ok) {
    //     response.json().then((shop) => {
    //       setCurrentUser(shop);
    //     });
    //   } else {
    //     console.log("Unable to log");
    //   }
    // });
  };

  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address..."
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone number..."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password..."
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">SIGNUP</button>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
export default Signup;
