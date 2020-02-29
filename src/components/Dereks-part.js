import React from "react";
import ReactDOM from "react-dom";

const Derekspart = ({ basket, sort }) => {
   return (
      <ul>
         <li>Position By: {sort}</li>
         {basket.map(item => (
            <li key={basket.id}>{basket.value}</li>
         ))}
      </ul>
   );
};

export default Derekspart;
