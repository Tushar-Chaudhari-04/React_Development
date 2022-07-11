import React from "react";

const hour = new Date().getHours();
console.log(hour);
const day =
  hour > 0 && hour < 12
    ? "Morning"
    : hour >= 12 && hour <= 18
    ? "Afternoon"
    : "Evening";
console.log(day);

const customStyle = {
  color: day === "Morning" ? "red" : day === "Afternoon" ? "green" : "blue"
};

function Heading() {
  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {day} Tushar
      </h1>
    </div>
  );
}

export default Heading;
