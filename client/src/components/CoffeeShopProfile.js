import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
import "../App.css";

function CoffeeShopProfile({ currentUser, setCurrentUser }) {
  //   const [user, setUser] = useState("");

  const [name, setName] = useState(currentUser.name);
  const [address, setAddress] = useState(currentUser.address);
  const [description, setDescription] = useState("");
  const coffee_shop_id = useState(currentUser.id);
  const [contact, setContact] = useState(currentUser.contact);
  const [toggleToEdit, setToggleToEdit] = useState(true);
  //   const history = useHistory();

  const toggle = () => {
    setToggleToEdit(!toggleToEdit);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

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
  };

  return (
    <div>
      {toggleToEdit ? (
        <div>
          <h1>{currentUser.name}</h1>
          <p>{currentUser.address}</p>
          <p>{currentUser.contact}</p>
          <p>{currentUser.description}</p>
          <p>{currentUser.user_name}</p>
          <button onClick={toggle}>Edit Profile</button>
        </div>
      ) : (
        <div>
          <h1>SIGNUP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              type="text"
              placeholder="Address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="text"
              placeholder="Phone number..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <button type="submit">Apply Changes</button>
          </form>
        </div>
      )}
    </div>
  );
}
export default CoffeeShopProfile;
