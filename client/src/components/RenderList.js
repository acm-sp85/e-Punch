import React from "react";
import "../App.css";

function renderingList(props) {
  return (
    <div>
      {props.list.map((item) => (
        <div>
          <div className="card" key={item.id}>
            <img
              src="https://uploads-ssl.webflow.com/6046a7b973c7a186ae5ce9d3/6046a7b973c7a107ee5cea18_Testimonial%20User.svg"
              className="avatar"
              alt="https://previews.123rf.com/images/asmati/asmati1706/asmati170606229/80944205-user-avatar-illustration-anonymous-sign-vector-white-icon-with-soft-shadow-on-transparent-background.jpg"
            />
            <div className="card-body">
              <h5 className="card-title">{item.customer_name}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn btn-primary">
                Issue a new punch card
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default renderingList;
