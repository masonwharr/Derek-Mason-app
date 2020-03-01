import React, { useState } from 'react';
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";

function Launderer() {
   const [basket, setBasket] = useState([]);
   const [sort, setSort] = useState();

   const addLaundry = (item) => {
     let newBasket = basket.push(item);
     console.log(newBasket);
        setBasket(newBasket);
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
// Your part will do a sort upon clicking a button. Otherwise there is no point in a basket. Baskets commonly have unfolded laundry.
   //Then when it's folded, the basket is emptied.
return (
      <div className="App">
         <Masonspart addLaundry={addLaundry} basketToDisplay={basket}/>
         <Derekspart basket={basket} sort={sort} setSort={changeSort}/>
      </div>
   );
}

export default Launderer;
