import React, { useState, useEffect } from "react";
import "../App.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    whoAmI();
  }, []);

  const whoAmI = () => {
    fetch("/me")
      .then((response) => response.json())
      .then((me) => {
        console.log("YOU ARE LOGGED IN:", me);
      });
  };

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
        setEmail(shops.user_name);
        console.log(
          "we need to create a callback function to store our users info in state"
        );
      });
  };

  const deleteRequest = (e) => {
    fetch("/logout", { method: "DELETE" }).then(() =>
      console.log("Logged out:", email)
    );
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
      <button onClick={deleteRequest}>Logout</button>
    </div>
  );
}
export default Login;
