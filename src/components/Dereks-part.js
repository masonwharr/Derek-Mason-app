import React, {useState, useEffect} from "react";

const Derekspart = ({ basket, drawer, sortIntoDrawer, sort, setSort }) => {

   const [sortedDrawer, setDrawer] = useState('');
   useEffect(() => {
      setDrawer(drawer.map((item) =>
      <li key={item.key} className="clothing-item" data-name={item.name} data-color={item.color} data-size={item.size} data-type={item.type}>
         <span>Name: {item.name}</span>
         <span>Type: {item.type}</span>
         <span>Size: {item.size}</span>
         <span>Color: {item.color}</span>
      </li>
      ));
   }, [drawer, sort])

   const emptyBasket = basket => {
      basket.length = 0;
   }

   const getSelectedClass = option => {
      return sort == option ? 'selected sort-option button' : 'sort-option button'
   }

   return (
      <section>   
         <button onClick={() => {sortIntoDrawer(sort, basket); emptyBasket(basket);}}>Click to sort items into drawers</button>
         <div className="sort-container">
            <h3 className="sort-title">Position By:</h3>
            <ul className="sort-option-list">
               <li><button className={getSelectedClass('name')} onClick={() => {setSort('a'); sortIntoDrawer(sort, basket)}}>Name</button></li>
               <li><button className={getSelectedClass('type')} onClick={() => {setSort('b'); sortIntoDrawer(sort, basket)}}>Type</button></li>
               <li><button className={getSelectedClass('size')} onClick={() => {setSort('c'); sortIntoDrawer(sort, basket)}}>Size</button></li>
               <li><button className={getSelectedClass('color')} onClick={() => {setSort('d'); sortIntoDrawer(sort, basket)}}>Color</button></li>
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
