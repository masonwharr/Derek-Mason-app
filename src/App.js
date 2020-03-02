import React, { useState } from 'react';
import "./App.css";
import Derekspart from "./components/Dereks-part";
import Masonspart from "./components/Masons-part";
import Form from "./components/info-form";

function Launderer() {
   const [sort, setSort] = useState("");
   const [drawer, setDrawer] = useState([]);
   const [basket, setBasket] = useState([]);
   const [name, setName] = useState("");
   const [color, setColor] = useState("");
   const [size, setSize] = useState("");
   const [type, setType] = useState("");

   const changeSort = option => {
      switch (option) {
         case 'a':
            return setSort('name');
         case 'b':
            return setSort('type');
         case 'c':
            return setSort('size');
         case 'd':
            return setSort('color');
         default:
            return setSort('name');
      }
   };

   const sortIntoDrawer = (sort, basket) =>{
      switch (sort) {
         case 'name':
            return setDrawer([...basket].sort((a, b) => (a.name > b.name) ? 1 : -1));
         case 'type':
            return setDrawer([...basket].sort((a, b) => (a.type > b.type) ? 1 : -1));
         case 'size':
            return setDrawer([...basket].sort((a, b) => (a.size > b.size) ? 1 : -1));
         case 'color':
            return setDrawer([...basket].sort((a, b) => (a.color > b.color) ? 1 : -1));
         default:
            return setDrawer([...basket].sort((a, b) => (a.name < b.name) ? 1 : -1));
      }
   }

   function isEmpty(obj) {
      if(obj.size === "" || obj.name === "" || obj.color === "" || obj.type === ""){
         return false
      }
      return true
  }

   const addLaundry = (item) => {
      if(isEmpty(item)) {
         setBasket(basket.concat(item));
         setName("");
         setSize("");
         setColor("");
         setType("");
     } else {
         console.log('Object is empty')
     }
   };
   
   const addFromForm = (size, name, color, type) => {
      let item = {
         size: size,
         name: name,
         color: color,
         type: type,
         key: basket.length + 1
      };
      console.log(item)
      addLaundry(item);
   };

return (
      <div className="App">
         <Form addFromForm={addFromForm} size={size} name={name} color={color} type={type} setSize={setSize} setName={setName} setColor={setColor} setType={setType}/>
         <Masonspart addLaundry={addLaundry} basket={basket}/>
         <Derekspart basket={basket} drawer={drawer} sortIntoDrawer={sortIntoDrawer} sort={sort} setSort={changeSort}/>
      </div>
   );
}

export default Launderer;
