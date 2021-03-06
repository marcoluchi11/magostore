import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import React from "react";
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
    padding: 0.7rem;
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
const CartCard = ({ product, handleClick }) => {
  return (
    <Container>
      <Divimagen>
        <img src={product.imagen} alt="img" />
        <h4>
          {product.title} - Talle {product.talle}
        </h4>
      </Divimagen>
      <Qty>
        <button onClick={() => handleClick(product)}>
          <FaTrashAlt size="30px" color="black"></FaTrashAlt>
        </button>
      </Qty>

      <Precio>
        <h1>${product.price}</h1>
      </Precio>
    </Container>
  );
};

export default CartCard;
