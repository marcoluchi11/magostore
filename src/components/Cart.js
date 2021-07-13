import { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import React from "react";
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
  flex-direction: column;
  width: 100%;
  div h1 {
    margin: 0 1rem;
  }
  @media all and (min-width: 720px) {
    margin-right: 1rem;
    align-items: flex-end;
    div h1 {
      margin: 0 1rem;
    }
  }
`;
const Total = styled.div``;

const BotonPago = styled.input`
  margin: 1rem;
  padding: 1rem;
  outline: 0;
  border: 0;
  border-radius: 25px;
  background-color: #ffa328;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1.2rem;
  &&:hover {
    background-color: #cb8230;
  }
`;
const Cart = () => {
  // APP_USR-4011510326781234-061222-60001506e5e5c258d4e4e89a0afab2c4-8908064

  const { cart, total, setTotal, setCart } = useContext(CartContext);
  const handleClick = (producto) => {
    const { id, price } = producto;
    const deleteProduct = () => {
      let cartCopy = cart;
      const index = cartCopy.findIndex((product) => product.id === id);
      cartCopy.splice(index, 1);
      return cartCopy;
    };
    const productDelete = deleteProduct();
    localStorage.setItem("cart", JSON.stringify(productDelete));
    setCart(productDelete);

    setTotal(total - price);
  };
  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart"));
    if (local) {
      let totalLocal = 0;
      local.forEach((product) => {
        totalLocal += product.price;
      });
      setTotal(totalLocal);
      setCart(local);
    }
    //eslint-disable-next-line
  }, [setCart, setTotal]);
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
                <form action="http://localhost:4000/checkout" method="POST">
                  <input
                    type="hidden"
                    name="cart"
                    value={JSON.stringify(cart)}
                  />
                  <input type="hidden" name="title" value="Zapatilla" />
                  <input type="hidden" name="price" value="1000" />
                  <BotonPago
                    formTarget="_blank"
                    type="submit"
                    value="Continuar con la compra"
                  />
                </form>
              </ContainerTotal>
            </Fragment>
          );
        } else {
          return (
            <CartCard
              key={nanoid()}
              handleClick={handleClick}
              product={product}
            />
          );
        }
      })
    );
  return cartRetorno;
};

export default Cart;
