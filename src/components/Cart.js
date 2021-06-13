import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
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
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #e6e6e6;
  margin: 0.5rem;
`;
const Divimagen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;

  img {
    width: 5rem;
    height: 5rem;
    margin: 1rem;
  }
  h4 {
    margin: 0;
    padding: 0;
    width: 100%;
    text-align: center;
  }
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;

const Qty = styled.div`
  display: flex;
  align-items: center;

  button {
    outline: 0;
    border: 0;
    background-color: #ffa328;
    border-radius: 50%;
    cursor: pointer;
    margin: 0.5rem;
  }
  button:hover {
    background-color: #fff;
  }
  p {
    margin: 0;
    padding: 0;
  }
`;

const Precio = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  @media all and (min-width: 720px) {
    font-size: 1.3rem;
  }
`;

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const handleClick = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const cartRetorno =
    cart.length === 0 ? (
      <Carritovacio>
        <h3>El carrito esta vacío...</h3>
        <p>¿No sabés qué comprar? ¡Miles de productos te esperan!</p>
      </Carritovacio>
    ) : (
      cart.map((product) => (
        <Container>
          <Divimagen>
            <img src={product.image} alt="img" />
            <h4>
              {product.description} - {product.brand}
            </h4>
          </Divimagen>
          <Qty>
            <p>Cantidad : 1</p>
            <button onClick={() => handleClick(product.id)}>
              <img
                src="https://icongr.am/fontawesome/trash.svg?size=32&color=currentColor"
                alt="delete"
              />
            </button>
          </Qty>

          <Precio>
            <h1>{product.price}</h1>
          </Precio>
        </Container>
      ))
    );
  return cartRetorno;
};

export default Cart;
