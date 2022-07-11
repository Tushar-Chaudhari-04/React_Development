import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const hour = new Date().getHours();
console.log(hour);
const day =
  hour > 0 && hour < 12
    ? "Morning"
    : hour >= 12 && hour <= 18
    ? "AfterNoon"
    : "Evening";
console.log(day);

const customStyle = {
  color: day === "Morning" ? "red" : day === "AfterNoon" ? "green" : "blue"
};

ReactDom.render(
  <div>
    <h1 className="heading" style={customStyle}>
      Good {day}
    </h1>
  </div>,
  document.getElementById("root")
);
