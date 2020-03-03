import React, {useState, useEffect} from "react";

const Derekspart = ({ basket, drawer, sortIntoDrawer, sort, setSort }) => {

   const [selectedSort, setSelected] = useState('a');
   const sortSelected = option => {
      setSelected(option)
   }
   // useEffect(() => {
   //    basket.length = 0;
   //  }, [drawer]);
   
   let sortedDrawer = [];

   sortedDrawer = drawer.map((item) =>
      <li key={item.key} className="clothing-item" data-name={item.name} data-color={item.color} data-size={item.size} data-type={item.type}>
         <span>Name: {item.name}</span>
         <span>Type: {item.type}</span>
         <span>Size: {item.size}</span>
         <span>Color: {item.color}</span>
      </li>
      );
      
   function emptyBasket(basket){
      basket.length = 0;
   };

   return (
      <section>   
         <button onClick={() => {sortIntoDrawer(sort, basket); emptyBasket(basket);}}>Click to sort items into drawers</button>
         <div className="sort-container">
            <h3 className="sort-title">Position By:</h3>
            <ul className="sort-option-list">
               <li><button className={selectedSort === 'a' ? 'selected sort-option button' : 'sort-option button'} onClick={() => {setSort('a'); sortIntoDrawer(sort, drawer); sortSelected('a')}}>Name</button></li>
               <li><button className={selectedSort === 'b' ? 'selected sort-option button' : 'sort-option button'} onClick={() => {setSort('b'); sortIntoDrawer(sort, drawer); sortSelected('b')}}>Type</button></li>
               <li><button className={selectedSort === 'c' ? 'selected sort-option button' : 'sort-option button'} onClick={() => {setSort('c'); sortIntoDrawer(sort, drawer); sortSelected('c')}}>Size</button></li>
               <li><button className={selectedSort === 'd' ? 'selected sort-option button' : 'sort-option button'} onClick={() => {setSort('d'); sortIntoDrawer(sort, drawer); sortSelected('d')}}>Color</button></li>
            </ul>
         </div>
         <div className="drawer-container">
            <ul className="drawer-list">
               {sortedDrawer}
            </ul>
         </div>
      </section>
   );
};

export default Derekspart;
