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

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      console.log("logged out");
      history.push("/");
    });
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="custom-imputs"
          type="password"
          placeholder="Password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="custom-button" type="submit">
          LOGIN
        </button>
      </form>
      <p>
        <Link to="/signup">Sign Up</Link>
      </p>
      <button className="custom-button" onClick={logOut}>
        Logout
      </button>
    </div>
  );
}
export default Login;
