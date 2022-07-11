import React from "react";

function add(a, b) {
  return <h1>{a + b}</h1>;
}

function subtract(a, b) {
  return <h1>{a - b}</h1>;
}

function multiply(a, b) {
  return <h1> {a * b} </h1>;
}

function divide(a, b) {
  return <h1>{a / b}</h1>;
}

function reminder(a, b) {
  return <h1>{a % b}</h1>;
}

export { add, subtract, multiply, divide, reminder };
