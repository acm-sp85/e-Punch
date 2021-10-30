import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import "../App.css";

function CoffeeShopProfile({ currentUser, setCurrentUser }) {
  //   const [user, setUser] = useState("");

  const [name, setName] = useState(currentUser.name);
  const [contact, setContact] = useState(currentUser.contact);

  //   const history = useHistory();

  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      address,
      description,
      contact,
    }),
  };

  fetch(`/coffee_shops/${coffee_shop_id}`, requestOptions)
    .then((response) => response.json())
    .then((updated) => {
      console.log(updated);
    });

  return <div></div>;
}
export default CoffeeShopProfile;
