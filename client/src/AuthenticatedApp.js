import React, { useEffect } from "react";
import { Switch, Route, useHistory, Link } from "react-router-dom";
// import RenderList from "./components/RenderList";

function AuthenticatedApp({}) {
  // const [user, setUser] = useState(null);
  // const [id, setId] = useState(null);
  // const [punchCards, setPunchCards] = useState(null);
  const history = useHistory();

  // setUser(currentUser.user.user_name);
  // setId(currentUser.user.id);
  // setPunchCards(currentUser.user.punch_cards);

  useEffect(() => {
    fetch("/coffee_shops/1")
      .then((response) => response.json())
      .then((shops) => {
        console.log(shops.punch_cards);
      });
    console.log("used FX");
  });

  const logOut = () => {
    fetch("/logout", { method: "DELETE" }).then(() => {
      // setUser("");
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
          {/* Logged in as {currentUser.user.name}{" "} */}
          <button onClick={logOut}>Logout</button>
        </span>
      </nav>
      <div className="App">
        <Switch>
          <Route path="/customers">
            {/* <RenderList list={punchCards} /> */}
            <p>hola</p>
          </Route>
        </Switch>
      </div>
    </div>
  );
}
export default AuthenticatedApp;
