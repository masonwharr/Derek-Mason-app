import React from "react";
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";

function Launderer() {
   const [basket, setBasket] = useState([]);

   const addLaundry = () => {
      setBasket([
         ...basket,
         {
            id: basket.length,
            value: "new laundry item"
         }
      ]);
   };

   return (
      <div className="App">
         <Masonspart addLaundry={addLaundry} />
         <Derekspart basket={basket} />
      </div>
   );
}

export default Launderer;
