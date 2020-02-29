import React from "react";
import ReactDOM from "react-dom";

const Derekspart = ({ basket }) => {
   return (
      <ul>
         {basket.map(item => (
            <li key={basket.id}>{basket.value}</li>
         ))}
      </ul>
   );
};

export default Derekspart;
