import React, { useState, useEffect } from "react";
import RenderList from "../components/RenderList";
import "../App.css";

function Fetching() {
  // Declare a new state variable, which we'll call "count"

  const [coffee_shops, setCoffee_shops] = useState([]);
  const [punch_cards, setPunch_cards] = useState([]);
  const [customers, setCustomers] = useState([]);

  const whoAmI = () => {
    fetch("/me")
      .then((response) => response.json())
      .then((me) => {
        console.log("YOU ARE LOGGED IN:", me);
      });
  };

  useEffect(() => {
    whoAmI();
    // Update the document title using the browser API
    fetch("/coffee_shops")
      .then((response) => response.json())
      .then((shops) => {
        // console.log(coffee_shops);
        setCoffee_shops(shops);
      });
    fetch("/punch_cards")
      .then((response) => response.json())
      .then((punch_cards) => {
        // console.log(punch_cards);
        setPunch_cards(punch_cards);
      });
    fetch("/customers")
      .then((response) => response.json())
      .then((customers) => {
        // console.log(customers);
        setCustomers(customers);
      });
    fetch("/me")
      .then((response) => response.json())
      .then((me) => {
        console.log(me);
      });
  }, []);
  //   return coffee_shops.map((shop) => <p key={shop.id}>{shop.name}</p>);
  return (
    <div>
      <RenderList list={customers} />
      <p>CAFETERIAS</p>
      <RenderList list={coffee_shops} />
    </div>
  );
}
export default Fetching;
