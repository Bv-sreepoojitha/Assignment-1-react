import React from "react";
import ReactDOM from "react-dom";
var react= React.createElement("h1", {}, "helloreact");

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(react);
