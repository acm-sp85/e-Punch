import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

function SignupCustomer({ setCurrentUser }) {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: email,
        name,
        contact,
      }),
    };

    fetch("/customers", requestOptions).then((response) => {
      if (response.ok) {
        response.json().then((shop) => {
          history.push("/");
        });
      } else {
        console.log("Unable to log");
      }
    });
  };

  return (
    <div>
      <h3>SIGNUP</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          className="custom-imputs"
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br />
        <input
          className="custom-imputs"
          type="text"
          placeholder="Phone number..."
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />

        <br />
        <br />
        <button className="custom-button" type="submit">
          CREATE CUSTOMER
        </button>
      </form>
    </div>
  );
}
export default SignupCustomer;
