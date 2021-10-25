import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function AuthenticatedApp() {
  const [user, setUser] = useState("");
  const history = useHistory();

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser("");
      history.push("/login");
    });
  };

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

  return (
    <div>
      <p>{user}</p>
      <button onClick={logOut}>LogOut</button>
    </div>
  );
}
export default AuthenticatedApp;
