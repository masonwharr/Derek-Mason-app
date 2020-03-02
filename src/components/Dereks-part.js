import React, {useState, useEffect} from "react";


const Derekspart = ({ basket, drawer, sortIntoDrawer, sort, setSort }) => {

   useEffect(() => {
      sortIntoDrawer(sort, basket);
    }, [basket, sort]);

    let sortedDrawer = drawer.map((item) =>
      <li key={item.key}>
        Name: {item.name}
        Type: {item.type}
        Size: {item.size}
        Color: {item.color}
      </li>
      );
   // TODO drawer only displays after user clicks button, and updates each time after
   return (
      <section>   
         {/* <button onClick={sortIntoDrawer(sort, basket)}>Click to sort items into drawers</button> */}
         <ul>
            <li>Position By:</li>
            <li><button onClick={e => setSort('a')}>Name</button></li>
            <li><button onClick={e => setSort('b')}>Type</button></li>
            <li><button onClick={e => setSort('c')}>Size</button></li>
            <li><button onClick={e => setSort('d')}>Color</button></li>
         </ul>
         <ul>
            {sortedDrawer}
         </ul>
      </section>
   );
};

export default Derekspart;
