import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "../App.css";

function IssueNew({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleError, setToggleError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptionsCard = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        coffee_shop_id: currentUser.currentUser.id,
        customer_id: customerId,
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

    const requestUserCheck = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch(`/customers/find/${email}`, requestUserCheck)
      .then((response) => {
        if (response.ok) {
          setToggleButton(true);
          return response.json();
        } else {
          setToggleError(true);
          throw new Error("Something went wrong");
        }
      })
      .then((user) => {
        console.log(user.id);
        setCustomerId(user.id);
      });
  };

  return (
    <div>
      <h3>ISSUE CARD</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="email"
          placeholder="Customer's email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />

        <button className="custom-button" onClick={checkCustomer}>
          Check customer
        </button>
        <br />

        {toggleButton ? (
          <button type="submit" className="custom-button">
            Issue Card
          </button>
        ) : (
          <div></div>
        )}
        <br />
        {toggleError ? (
          <p className="error">Customer not registered in ePunch App</p>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
}
export default IssueNew;
