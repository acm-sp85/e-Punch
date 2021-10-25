import React, { useState, useEffect } from "react";
import "../App.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: email,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    };

    fetch("/coffee_shops", requestOptions)
      .then((response) => response.json())
      .then((shops) => {
        console.log(shops);
      });
  };

  return (
    <div>
      <h1>SIGNUP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password..."
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
      </form>
    </div>
  );
}
export default Signup;
