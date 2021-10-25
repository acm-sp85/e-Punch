import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: email,
        password: password,
      }),
    };

    fetch("/login", requestOptions)
      .then((response) => response.json())
      .then((shops) => {
        console.log(shops);
      });
    history.push("/");
  };

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
      history.push("/login");
    });
  };

  return (
    <div>
      <h1>LOGIN</h1>
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
        <button type="submit">LOGIN</button>
      </form>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
export default Login;
