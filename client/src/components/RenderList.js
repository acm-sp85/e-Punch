import React, { useState } from "react";
import "../App.css";

function renderingList(props) {
  return props.list.map((item) => <p key={item.id}>{item.name}</p>);
  //   return <p>HOLI</p>;
}
export default renderingList;
