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

    const requestOptionsCustomer = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user_name: email,
        name: name,
      }),
    };
    const requestOptionsCard = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coffee_shop_id: currentUser.id,
        customer_id: customer.id,
        counter: 0,
      }),
    };

    fetch("/customers", requestOptionsCustomer)
      .then((response) => response.json())
      .then((customer) => {
        console.log(customer);
        setCustomer(customer);
      })
      .then(
        fetch("/punch_cards", requestOptionsCard)
          .then((response) => response.json())
          .then((new_card) => {
            console.log(new_card);
          })
      );
  };

  return (
    <div>
      <h1>ISSUE CARD</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">SIGNUP</button>
        <p>
          <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}
export default Signup;
