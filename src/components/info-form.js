import React, { useState } from 'react';

const Form = ({ setfields, addFromForm, size, name, color, type, setSize, setName, setColor, setType  }) => {
    return (
    <form onSubmit={e => e.preventDefault()}>
        <div className="input-container">
            <div className="input-row">
                <label for="Name" >Name</label>
                <input className="item-input" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-row">
                <label for="Size" >Size</label>
                <input className="item-input" value={size} onChange={e => setSize(e.target.value)} />
            </div>
            <div className="input-row">
                <label for="Color" >Color</label>
                <input className="item-input" value={color} onChange={e => setColor(e.target.value)} />
            </div>
            <div className="input-row">
                <label for="Type" >Type</label>
                <input className="item-input" value={type} onChange={e => setType(e.target.value)} />
            </div>
            <input onClick={() => addFromForm(size, name, color, type)} type="submit" value="Add To Form" />
        </div>
    </form>
   );
};
export default Form;