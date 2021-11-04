import React, { useState, useEffect } from "react";
import "../App.css";

function Home(props) {
  const [currentUser, setCurrentUser] = useState(props.currentUser);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");

  useEffect(() => {
    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setName(user.name);
          setAddress(user.address);
          setContact(user.contact);
        });
      } else {
        console.log("Couldn't access Coffee Shop's info");
      }
    });
  }, []);

  return (
    <div class="row">
      <div className="column">
        <img
          src="https://i.dlpng.com/static/png/6478401_preview.png"
          className="coffee-shop-icon"
        />
      </div>
      <div className="column">
        <h1>{currentUser.name}</h1>
        <p>{currentUser.address}</p>
        <p>{currentUser.contact}</p>
      </div>
    </div>
  );
}
export default Home;
