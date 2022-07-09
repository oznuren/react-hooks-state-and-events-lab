import React, { useState } from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);
  // In the Item component, when the user clicks the <button> element, the item should be added to their virtual cart. The way we'll show the user that the item is in the cart is by changing the className on the <li> element:

  const addItem = () => {
    setIsAdded(!isAdded);
  };
  const cartClass = isAdded ? "in-cart" : "";
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}>
        {isAdded ? "Add to Cart" : "Remove from Cart"}
      </button>
    </li>
  );
}

export default Item;
