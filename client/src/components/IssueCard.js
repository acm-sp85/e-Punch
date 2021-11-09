import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

function IssueNew({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [toggleButton, setToggleButton] = useState(false);
  const [toggleError, setToggleError] = useState(false);
  const [error, setError] = useState("")

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (toggleError) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_name: email,
          name,
          contact,
        }),
      };

      fetch("/customers", requestOptions).then((response) => {
        if (response.ok) {
          response.json().then((newCustomer) => {
            setCustomerId(newCustomer.id);
            setToggleButton(!toggleButton);
            setToggleError(!toggleError);
            setError("")
            console.log("user created")
          });
        } else {

          response.json()
          .then((error) => {
            console.log(error.errors)
            setError(error.errors)
          })
        }
      });
    } else {
      console.log("issue a card");
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
      
        .then((response) => {
          if (response.ok){
            history.push("/cards");

          }else {
            response.json()
            .then((error) => {
              console.log(error.error)
            })
          }
        });
    }
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

  const signUpNewCustomer = () => {
    console.log("create new customer");
    history.push("/new-customer");
  };

  return (
    <div>
      <h3>ISSUE CARD</h3>
      {toggleError ? (
        <React.Fragment>
          <p className="error">Customer not registered in ePunch App</p>
          <p className="error">
            Please fill out info bellow to create a new customer
          </p>
        </React.Fragment>
      ) : (
        <React.Fragment></React.Fragment>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="custom-imputs"
          type="email"
          placeholder="Customer's email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {toggleError ? (
          <React.Fragment>
            <br />
            <input
              className="custom-imputs"
              type="name"
              placeholder="Customer's name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              className="custom-imputs"
              type="contact"
              placeholder="Customer's phone number..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <br />
          </React.Fragment>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        {error? (<React.Fragment>
          <p className="error">{error.map(e => <p>{e}</p>)}</p>
   
        </React.Fragment>) : (<React.Fragment> </React.Fragment>)}
        {toggleError ? (
          <React.Fragment>
            <br />
            <button className="custom-button" /*onClick={signUpNewCustomer}*/>
              Create new customer
            </button>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <br />
            <br />
            <button className="custom-button" onClick={checkCustomer}>
              Check customer
            </button>
          </React.Fragment>
        )}
        <br />

        {toggleButton ? (
          <button
            type="submit"
            className="custom-button"
            onClick={handleSubmit}
          >
            Issue Card
          </button>
        ) : (
          <React.Fragment></React.Fragment>
        )}
        <br />
      </form>
    </div>
  );
}
export default IssueNew;
