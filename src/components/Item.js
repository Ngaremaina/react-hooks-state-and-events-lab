import React,{ useState} from "react";

function Item({ name, category }) {
  const [itemcart, itemCart] = useState(false)

  function handleClick(){
    itemCart(!itemcart)
  }

  return (
    <li className={itemcart ? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={itemcart? "remove":"add"} onClick={handleClick}>{itemcart? "Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
