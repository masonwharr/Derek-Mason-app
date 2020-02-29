import React from "react";
import ReactDOM from "react-dom";

const Masonspart = ({ onClick, count }) => {
   return <button onClick={onClick}>Click me {count}</button>;
};

export default Masonspart;
