import React from "react";
import "../App.css";

function renderingList(props) {
  const resetCounter = (e) => {
    const punch_card_id = e.target.id;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: 0,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}/update`, requestOptions)
      .then((response) => response.json())
      .then((updated) => {
        console.log(updated);
      });
  };
  const punchCard = (e) => {
    const punch_card_id = e.target.id;
    const updatedCounter = props.list;
    const counter = updatedCounter.find((card) => card.id == punch_card_id);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        counter: counter.counter + 1,
      }),
    };

    fetch(`/punch_cards/${punch_card_id}/update`, requestOptions)
      .then((response) => response.json())
      .then((updated) => {
        console.log(updated);
      });
  };

  return (
    <div>
      {props.list.map((item) => (
        <div key={item.id}>
          <div className="card">
            <img
              src="https://uploads-ssl.webflow.com/6046a7b973c7a186ae5ce9d3/6046a7b973c7a107ee5cea18_Testimonial%20User.svg"
              className="avatar"
              alt="https://previews.123rf.com/images/asmati/asmati1706/asmati170606229/80944205-user-avatar-illustration-anonymous-sign-vector-white-icon-with-soft-shadow-on-transparent-background.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">{item.customer_name}</h5>
              <p className="card-text">{item.counter} / 10</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={punchCard}
                id={item.id}
              >
                PUNCH
              </a>
              <a
                href="#"
                className="btn btn-primary"
                onClick={resetCounter}
                id={item.id}
              >
                Reset
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default renderingList;
