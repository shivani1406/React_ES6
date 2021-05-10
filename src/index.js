import React from "react";
import ReactDOM from "react-dom";
import * as sum from "./calculator.js";
//Import the add, multiply, subtract and divide functions
//from the calculator.js file.
//If successful, your website should look the same as the Final.png

ReactDOM.render(
  <ul>
    <li>{sum.add(1, 2)}</li>
    <li>{sum.multiply(2, 3)}</li>
    <li>{sum.subtract(7, 2)}</li>
    <li>{sum.divide(5, 2)}</li>
  </ul>,
  document.getElementById("root")
);
