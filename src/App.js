import React from "react";
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";

function Launderer() {
   const [basket, setBasket] = useState([]);
   const [sort, setSort] = useState("new");

   const addLaundry = () => {
      setBasket([
         ...basket,
         {
            id: basket.length,
            value: "new laundry item"
         }
      ]);
   };

   const changeSort = option => {
      switch (option) {
         case "a":
            return setSort("new");
         case "b":
            return setSort("color");
         case "c":
            return setSort("type");
         default:
            return setSort("new");
      }
   };

   return (
      <div className="App">
         <Masonspart addLaundry={addLaundry} setSort={changeSort} />
         <Derekspart basket={basket} sort={sort} />
      </div>
   );
}

export default Launderer;
