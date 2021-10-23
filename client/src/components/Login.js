import React, { useState, useEffect } from "react";
import Registration from "./auth/Registration";
import "../App.css";

function Login() {
  // Declare a new state variable, which we'll call "count"

  const [coffee_shops, setCoffee_shops] = useState([]);

  useEffect(() => {}, []);

  return (
    <div>
      <p>LOGIN</p>
      <Registration />
    </div>
  );
}
export default Login;
