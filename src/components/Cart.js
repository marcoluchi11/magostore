import { Fragment, useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CartCard from "./CartCard";
const Carritovacio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #666666;
  margin-top: 5rem;
  h3 {
    font-weight: 400;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    font-weight: 300;
  }
`;
const ContainerTotal = styled.div`
  display: flex;
  justify-content: flex-end;
  background-color: #e6e6e6;
  margin: 0.5rem;

  @media all and (min-width: 720px) {
    margin-right: 2.8rem;
  }
`;
const Total = styled.div`
  display: flex;
  justify-content: flex-start;
`;
const Cart = () => {
  const { cart, total, setTotal, setCart } = useContext(CartContext);
  const handleClick = (producto) => {
    const { id, price } = producto;
    const deleteProduct = () => {
      let cartCopy = cart;

      const index = cartCopy.findIndex((product) => product.id === id);
      console.log(index);
      cartCopy.splice(index, 1);
      return cartCopy;
    };
    const productDelete = deleteProduct();
    setCart(productDelete);
    // setCart(cart.filter((product) => product.id !== id));

    setTotal(total - price);
  };
  const cartRetorno =
    cart.length === 0 ? (
      <Carritovacio>
        <h3>El carrito esta vacío...</h3>
        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
      </Carritovacio>
    ) : (
      cart.map((product, index) => {
        if (index === cart.length - 1) {
          return (
            <Fragment key={nanoid()}>
              <CartCard handleClick={handleClick} product={product} />
              <ContainerTotal>
                <Total>
                  <h1>Total: ${total}</h1>
                </Total>
              </ContainerTotal>
            </Fragment>
          );
        } else {
          return <CartCard handleClick={handleClick} product={product} />;
        }
      })
    );
  return cartRetorno;
};

export default Cart;
