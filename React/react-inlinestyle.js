import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const date = new Date();
const hour = date.getHours();
var message = "";
var bgColor = {
  color:""
  }
   
  if (hour < 12) {message = "Good morning!!";bgColor.color = "red";}
  else if (hour < 18) {message = "Good afternoon!!";bgColor.color = "green";}
  else {message = "Good night!!";bgColor.color = "blue";};
ReactDOM.render(
  <h1 className="heading" style= {bgColor}>{message}</h1>,
  document.getElementById("root")
);
