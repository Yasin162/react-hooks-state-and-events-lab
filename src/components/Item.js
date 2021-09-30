import React, { useState } from "react";

function Item({ name, category }) {

  const [add, setAdd] = useState()
  
  const handleAddToCart = () => {
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;
