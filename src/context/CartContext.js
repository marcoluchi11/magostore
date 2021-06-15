import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <CartContext.Provider value={{ cart, total, setCart, setTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
