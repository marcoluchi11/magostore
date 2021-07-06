import React, { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  const [added, setAdded] = useState(false);
  return (
    <CartContext.Provider
      value={{
        cart,
        added,
        products,
        total,
        setAdded,
        setCart,
        setProducts,
        setTotal,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
