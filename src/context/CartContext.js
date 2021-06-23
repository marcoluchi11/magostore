import { createContext, useState } from "react";
export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [products, setProducts] = useState([]);
  return (
    <CartContext.Provider value={{ cart, products,total, setCart, setProducts, setTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
