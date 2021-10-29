import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

function Signup({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [customer, setCustomer] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptionsCard = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coffee_shop_id: currentUser.id,
        customer_id: customer.id,
        counter: 0,
      }),
    };

    fetch("/punch_cards", requestOptionsCard)
      .then((response) => response.json())
      .then((new_card) => {
        console.log(new_card);
      });
  };
  //NEED TO LOOKUP A CUSTOMER ON OUR CUSTOMERS DB BY THEIR EMAIL. IF IT RETURNS SOMETHING THEN WE WILL ACTIVATE THE ISSUE CARD BUTTON
  const checkCustomer = (e) => {
    e.preventDefault();
    console.log("Check if customer exists");
    // fetch(`/customers`)
  };

  return (
    <div>
      <h1>ISSUE CARD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Customer's email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={checkCustomer}>Check customer</button>
        <button type="submit">Issue Card</button>
      </form>
    </div>
  );
}
export default Signup;
