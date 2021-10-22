import React, { useState, useEffect } from "react";
import "../App.css";

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Alex");

  useEffect(() => {
    // Update the document title using the browser API
    fetch("/coffee_shops")
      .then((response) => response.json())
      .then((coffee_shops) => {
        console.log(coffee_shops);
      });
    fetch("/punch_cards")
      .then((response) => response.json())
      .then((punch_cards) => {
        console.log(punch_cards);
      });
    fetch("/customers")
      .then((response) => response.json())
      .then((customers) => {
        console.log(customers);
      });
  });

  function handleClick({}) {
    setCount(count + 1);
    console.log(name);
  }

  const handleClickTwo = () => {
    console.log("not Pedro");
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickTwo}>Click me</button>
    </div>
  );
}
export default Example;
