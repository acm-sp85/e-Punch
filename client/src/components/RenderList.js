import React, { useState, useEffect } from "react";
import "../App.css";

function renderingList(props) {
  const [punchCards, setPunchCards] = useState(
    props.currentUser.currentUser.punch_cards
  );

  const [coffeeShopId] = useState(props.currentUser.currentUser.id);

  useEffect(() => {
    fetch(`/coffee_shops/${coffeeShopId}/punch_cards`, {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((coffee_shop_punchCards) => {
          setPunchCards(coffee_shop_punchCards);
        });
      } else {
        console.log("Problems loading the user");
      }
    });
  }, []);

  //PUNCHING CARD
  const punchCard = (e) => {
    const punch_card_id = e.target.id;
    const punchedCard = punchCards.find((card) => card.id == punch_card_id);

    const updatingCard = punchCards.map((card) => {
      if (card.id == punch_card_id && card.counter < 10) {
        card.counter += 1;
      }
    });
    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: punchedCard.counter,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions).then((response) => {
      if (response.ok) {
        console.log("Card punched correctly");
      } else {
        console.log("Problems punching the card");
        punchCards.map((card) => {
          if (card.id == punch_card_id && card.counter < 10) {
            card.counter -= 1;
          }
        });
      }
    });
  };
  //RESETTING CARD
  const resetCounter = (e) => {
    const punch_card_id = e.target.id;

    const resettingCard = punchCards.map((card) => {
      if (card.id == punch_card_id) {
        card.counter = 0;
      }
    });

    const requestOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: 0,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions).then((response) => {
      if (response.ok) {
        console.log("Card reset correctly");
      } else {
        console.log("Problems resetting the card");
        punchCards.map((card) => {
          if (card.id == punch_card_id && card.counter < 10) {
            card.counter -= 1;
          }
        });
      }
    });
  };
  //DELETING CARD
  const deleteCard = (e) => {
    const punch_card_id = e.target.id;

    const filteredCards = punchCards.filter((card) => card.id != punch_card_id);
    console.log(filteredCards);
    setPunchCards(filteredCards);

    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    };

    fetch(`/punch_cards/${punch_card_id}`, requestOptions).then(
      console.log("Punch card deleted")
    );
  };

  return (
    <div>
      {punchCards.map((item) => (
        <div key={item.id}>
          <div className="card" className="custom-card">
            <img
              src="https://uploads-ssl.webflow.com/6046a7b973c7a186ae5ce9d3/6046a7b973c7a107ee5cea18_Testimonial%20User.svg"
              className="avatar"
              alt="img not found"
            />
            <div className="card-body">
              <h5 className="card-title" id={item.id}>
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
