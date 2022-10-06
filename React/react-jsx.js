import React from "react";
import ReactDom from "react-dom";

const name = "Amrithesh";
const luck = 7;

ReactDom.render(<div><h2>Hello {name}</h2><p>My lucky number is {luck}</p></div>, document.getElementById("root"));
