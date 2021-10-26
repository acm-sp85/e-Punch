import React, { useState, useEffect } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
import RenderList from "./components/RenderList";

function AuthenticatedApp({ currentUser, setCurrentUser }) {
  const [user, setUser] = useState("");
  const [id, setId] = useState("");
  const [punchCards, setPunchCards] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((me) => {
        console.log(me.user.user_name);
        setUser(me.user.user_name);
        setId(me.user.id);
      });
    fetch(`/coffee_shops/${currentUser.user.id}/punch_cards`)
      .then((response) => response.json())
      .then((data) => {
        setPunchCards(data.punch_cards);
        console.log(data);
      });
  }, []);

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      setUser("");
      history.push("/");
    });
  };
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
            {/* <RenderList list={punchCards} /> */}
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default AuthenticatedApp;
