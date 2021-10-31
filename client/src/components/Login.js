import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "../App.css";

function Login({ setCurrentUser }) {
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
      .then((user) => {
        setCurrentUser(user);
        history.push("/customers");
      });
  };

  return (
    <div>
      <h3>LOGIN</h3>
      <form onSubmit={handleSubmit}>
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
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button className="custom-button" type="submit">
          LOGIN
        </button>
      </form>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
}
export default Login;
