import React, { useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory, Link } from "react-router-dom";
import RenderList from "./components/RenderList";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [user, setUser] = useState("");
  const [coffee_shops, setCoffee_shops] = useState([]);
  const history = useHistory();

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser("");
      history.push("/");
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
    fetch("/coffee_shops")
      .then((response) => response.json())
      .then((shops) => {
        // console.log(coffee_shops);
        setCoffee_shops(shops);
      });
  }, []);

  return (
    <div>
      <nav>
        <span>
          <h3>
            <Link to="/">ePUNCH</Link>
          </h3>
        </span>
        <span>
          Logged in as {user} <button onClick={logOut}>Logout</button>
        </span>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/customers">
            <RenderList list={coffee_shops} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default AuthenticatedApp;
