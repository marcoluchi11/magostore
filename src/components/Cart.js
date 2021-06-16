import { Fragment, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import { nanoid } from "nanoid";
import CartCard from "./CartCard";
import axios from "axios";
import { useParams } from "react-router-dom";
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
  const { id } = useParams();

  useEffect(() => {
    console.log("holis, me monte");
  }, []);
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
                <form action="" method="post">
                  <BotonPago type="submit" value="Continuar con la compra" />
                  <script src="https://sdk.mercadopago.com/js/v2"></script>
                </form>
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
