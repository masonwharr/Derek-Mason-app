import React from "react";
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";

function Launderer() {
   const [value, setValue] = React.useState("");

   function handleChange(newValue) {
      setValue(newValue);
   }

   return (
      <div className="Launderer">
         <Masonspart value={value} onChange={handleChange} />
         <Derekspart value={value} />
      </div>
   );
}

export default Launderer;
