import React, {useState, useEffect} from "react";


const Derekspart = ({ basket, drawer, sortIntoDrawer, sort, setSort }) => {

   useEffect(() => {
      sortIntoDrawer(sort, basket);
    }, [basket, sort]);

    let sortedDrawer = drawer.map((item) =>
      <li key={item.key} className="clothing-item" data-name={item.name} data-color={item.color} data-size={item.size} data-type={item.type}>
         <span>Name: {item.name}</span>
         <span>Type: {item.type}</span>
         <span>Size: {item.size}</span>
         <span>Color: {item.color}</span>
      </li>
      );
   // TODO drawer only displays after user clicks button, and updates each time after
   return (
      <section>   
         {/* <button onClick={sortIntoDrawer(sort, basket)}>Click to sort items into drawers</button> */}
         <div className="sort-container">
            <h3 className="sort-title">Position By:</h3>
            <ul className="sort-option-list">
               <li><button className="sort-option button" onClick={e => setSort('a')}>Name</button></li>
               <li><button className="sort-option button" onClick={e => setSort('b')}>Type</button></li>
               <li><button className="sort-option button" onClick={e => setSort('c')}>Size</button></li>
               <li><button className="sort-option button" onClick={e => setSort('d')}>Color</button></li>
            </ul></div>
         <div className="drawer-container">
            <ul className="drawer-list">
               {sortedDrawer}
            </ul>
         </div>
      </section>
   );
};

export default Derekspart;
