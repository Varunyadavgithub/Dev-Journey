import React from "react";
import ReactDOM from "react-dom/client";

const containerDiv = React.createElement("div", { id: "container" }, [
  React.createElement("div", { id: "container" }, [
    React.createElement("h1", {}, "What is Parcel in React ?"),
    React.createElement("h2", {}, "I am Learning Parcel in React."),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(containerDiv);
