import React from "react";
import Heading from "./Heading";
import { add, subtract, multiply, divide, reminder } from "./Calculator";

function App() {
  return (
    <div>
      <Heading />
      <ul>
        <li>{add(1, 2)}</li>
        <li>{subtract(3, 2)}</li>
        <li>{multiply(3, 5)}</li>
        <li>{divide(8, 4)}</li>
        <li>{reminder(8, 4)}</li>
      </ul>
    </div>
  );
}

export default App;
