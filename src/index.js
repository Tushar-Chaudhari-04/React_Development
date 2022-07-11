import React from "react";
import ReactDom from "react-dom";
import "./styles.css";

const name = "Tushar Chaudhari";
const year = new Date().getFullYear();
ReactDom.render(
  <div>
    <h1 className="heading">{name}</h1>
    <p>Copyright {year}</p>
    <h2 style={{ color: "blue" }}>Indian Food</h2>
    <img
      src="https://image.shutterstock.com/image-photo/
    indian-food-curry-butter-chicken-260nw-1304901667.jpg"
      alt="indianfood"
    />
    {/* <div>
      <br />
    </div> */}
    <img
      src="https://encrypted-tbn0.gstatic.com/
    images?q=tbn:ANd9GcR9BAolfVoRqgQwfILsrzJIUGQ4uPKrpcFVcg&usqp=CAU"
      alt="food"
    />
  </div>,
  document.getElementById("root")
);
