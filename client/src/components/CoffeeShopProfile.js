import React, { useState } from "react";

import "../App.css";

function CoffeeShopProfile({ currentUser, setCurrentUser }) {
  return (
    <div>
      <h1>{currentUser.name}</h1>
      <p>{currentUser.address}</p>
      <p>{currentUser.contact}</p>
      <p>{currentUser.description}</p>
      <p>{currentUser.user_name}</p>
      <button>Edit Profile</button>
    </div>
  );
}
export default CoffeeShopProfile;
