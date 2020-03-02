import React, { useState } from 'react';
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";
import Form from "./components/info-form";

function Launderer() {
   const [basket, setBasket] = useState([]);
   const [sort, setSort] = useState("");
   const [name, setName] = useState("");
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");
   const [type, setType] = useState("");

   const addLaundry = (item) => {
        setBasket(basket.concat(item));
        setName("");
        setSize("");
        setColor("");
        setType("");
   };
   
   const addFromForm = (size, name, color, type) => {
      let item = {
         size: size,
         name: name,
         color: color,
         type: type,
         key: basket.length + 1
      };
      addLaundry(item);
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
         <Form addFromForm={addFromForm} size={size} name={name} color={color} type={type} setSize={setSize} setName={setName} setColor={setColor} setType={setType}/>
         <Masonspart addLaundry={addLaundry} basket={basket}/>
         <Derekspart basket={basket} sort={sort} setSort={changeSort}/>
      </div>
   );
}

export default Launderer;
