import React, { useState, useEffect } from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import "./App.css";

function Fetching() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((me) => {
        console.log(me.user.user_name);
        setUser(me.user.user_name);
      });
  }, []);

  if (user) {
    return <AuthenticatedApp />;
  } else {
    return <UnauthenticatedApp />;
  }
}
export default Fetching;
