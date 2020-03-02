import React, { useState, useEffect } from 'react';

const Masonspart = ({ addLaundry, basket}) => {
  var items = [];

  for (var i=0; i < basket.length; i++){
    items.push(<div className="clothing-item" data-name={basket[i].name} data-color={basket[i].color} data-size={basket[i].size} data-type={basket[i].type} key={basket[i].key}>{basket[i].name}</div>);
  }
  
return (
  <section className="unsorted-basket">
    <h2>Unsorted Basket</h2>
    <div className="clothing-item-container">
      {items}
    </div>
    <button onClick={addLaundry}>Click to sort items into drawers</button>
  </section>
    );
};

export default Masonspart;
