import React from "react";
import "../App.css";

function renderingList(props) {
  //RESETTING CARD
  const resetCounter = (e) => {
    const punch_card_id = e.target.id;
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: 0,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions)
      .then((response) => response.json())
      .then((updated) => {
        console.log(updated);
      });
  };

  //PUNCHING CARD
  const punchCard = (e) => {
    const punch_card_id = e.target.id;
    const updatedCounter = props.cardsList;
    const counter = updatedCounter.find((card) => card.id == punch_card_id);

    props.updateState();
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: counter.counter + 1,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions)
      .then((response) => response.json())
      .then((updated) => {
        console.log(updated);
      });
  };

  //DELETING CARD
  const deleteCard = (e) => {
    const punch_card_id = e.target.id;
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions).then(
      console.log("Punch card deleted")
    );
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    props.updateState();
  };

  return (
    <div>
      {props.cardsList.map((item) => (
        <div key={item.id}>
          <div className="card" className="custom-card">
            <img
              src="https://uploads-ssl.webflow.com/6046a7b973c7a186ae5ce9d3/6046a7b973c7a107ee5cea18_Testimonial%20User.svg"
              className="avatar"
              alt="img not found"
            />
            <div className="card-body">
              <h5
                className="card-title cursor"
                onClick={handleClick}
                id={item.id}
              >
                {item.customer_name}
              </h5>
              <p className="card-text">{item.counter} / 10</p>
              <a
                className="custom-button"
                href="#"
                onClick={punchCard}
                id={item.id}
              >
                PUNCH
              </a>
              <a
                className="custom-button"
                href="#"
                onClick={resetCounter}
                id={item.id}
              >
                Reset
              </a>
              <a
                className="custom-button"
                href="#"
                onClick={deleteCard}
                id={item.id}
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default renderingList;
