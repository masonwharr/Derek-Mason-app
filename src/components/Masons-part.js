import React from "react";
import ReactDOM from "react-dom";

const Masonspart = ({ addLaundry, basketToDisplay }) => {
  var items = [];
  for (var i=0; i < basketToDisplay.length; i++){
    items.push(<div className="clothing-item" data-name={basketToDisplay[i].name} data-color={basketToDisplay[i].color} data-size={basketToDisplay[i].size} data-type={basketToDisplay[i].type} key={i}>{basketToDisplay[i].name}</div>);
  }

  items.push(<div className="clothing-item" data-name="My H&M Shirt" data-color="Salmon" data-size="Medium" data-type="Shirt" id="0" >My H&M Shirt</div>);
    return (
<section className="unsorted-basket">
  <h2>Unsorted Basket</h2>
  <div className="clothing-item-container">
    {items}
  </div>
  <button onClick={addLaundry}>Click to add item to basket</button>
  <button onClick={addLaundry}>Click to sort items into drawers</button>
</section>
   );
};

export default Masonspart;
