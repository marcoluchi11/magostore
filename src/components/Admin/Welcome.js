import React from "react";
import styled from "styled-components";
import AddProduct from "./AddProduct";
import DeleteProduct from "./DeleteProduct";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Opciones = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 10px;
  background-color: #ffa328;
  cursor: pointer;

  font-size: 1.2rem;
`;

const Welcome = ({ action, setAction }) => {
  const handleClick = (e) => setAction(e.target.value);
  return (
    <Container>
      <Opciones onClick={handleClick} value="add">
        Agregar Producto
      </Opciones>
      <Opciones onClick={handleClick} value="delete">
        Eliminar Producto
      </Opciones>

      {action === "add" && <AddProduct />}
      {action === "delete" && <DeleteProduct />}
    </Container>
  );
};

export default Welcome;
