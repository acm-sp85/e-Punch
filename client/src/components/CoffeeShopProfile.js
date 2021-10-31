import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

function Profile({ props, currentUser }) {
  const [name, setName] = useState(currentUser.currentUser.name);
  const [address, setAddress] = useState(currentUser.currentUser.address);
  const [description, setDescription] = useState(
    currentUser.currentUser.description
  );
  const coffee_shop_id = useState(currentUser.currentUser.id);
  const [contact, setContact] = useState(currentUser.currentUser.contact);
  const [toggleToEdit, setToggleToEdit] = useState(true);
  const history = useHistory();

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
        history.push("/");
      });
  };

  return (
    <div>
      {toggleToEdit ? (
        <div>
          <h1>{currentUser.currentUser.name}</h1>
          <p>{currentUser.currentUser.address}</p>
          <p>{currentUser.currentUser.contact}</p>
          <p>{currentUser.currentUser.description}</p>
          <p>{currentUser.currentUser.user_name}</p>
          <button onClick={toggle} className="custom-button">
            Edit Profile
          </button>
        </div>
      ) : (
        <div>
          <h3>PROFILE</h3>
          <form onSubmit={handleSubmit}>
            <input
              className="custom-imputs"
              type="text"
              placeholder="Name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <input
              className="custom-imputs"
              type="text"
              placeholder="Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <input
              className="custom-imputs"
              type="text"
              placeholder="Address..."
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <input
              className="custom-imputs"
              type="text"
              placeholder="Phone number..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
            <br />
            <button type="submit" className="custom-button">
              Apply Changes
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
export default Profile;
