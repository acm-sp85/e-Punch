import React, { useState, useEffect } from "react";
import Login from "./components/Login";

function UnauthenticatedApp() {
  return (
    <div>
      <p>WELCOME TO ePUNCH</p>
      <Login />
    </div>
  );
}

export default UnauthenticatedApp;
