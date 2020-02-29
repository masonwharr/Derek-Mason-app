import React from "react";
import ReactDOM from "react-dom";

function Masonspart(props) {
   function handleChange(event) {
      // Here, we invoke the callback with the new value
      props.onChange(event.target.value);
   }

   return <input value={props.value} onChange={handleChange} />;
}

export default Masonspart;
