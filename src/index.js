import React from "react";
import ReactDOM from "react-dom";

const colorClasses = {
  color: "red",
  text4Red: "OMG! Something really bad has happended!",
  text4Orange: "Well, it is not that bad after all!",
};

const Alert = ({ text, color }) => {
  //your component here
  return (
    <div
      class={`alert alert-${color === "red" ? "danger" : "warning"}`}
      role="alert"
    >
      {text}
    </div>
  );
};

// here is where the alert component is being used, you don't have to edit this part,
// but it helps you understand what properties are being passed to the component
ReactDOM.render(
  <>
    <Alert text={colorClasses.text4Red} color="red" />
    <Alert text={colorClasses.text4Orange} color="orange" />
  </>,
  document.getElementById("root")
);
