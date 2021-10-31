import React, { useState } from "react";
import "../App.css";

function Home({ props, currentUser }) {
  const [name, setName] = useState(currentUser.name);
  const [address, setAddress] = useState(currentUser.address);
  const [description, setDescription] = useState(currentUser.description);
  const coffee_shop_id = useState(currentUser.id);
  const [contact, setContact] = useState(currentUser.contact);
  const [toggleToEdit, setToggleToEdit] = useState(true);

  return (
    <div class="row">
      <div className="column">
        <img src="https://cdn-icons.flaticon.com/png/128/4201/premium/4201007.png?token=exp=1635653114~hmac=a8504d5c5d3038cee1823e07ec8c28d8" />
      </div>
      <div className="column">
        <h1>{currentUser.currentUser.name}</h1>
        <p>{currentUser.currentUser.address}</p>
        <p>{currentUser.currentUser.contact}</p>
      </div>
    </div>
  );
}
export default Home;
