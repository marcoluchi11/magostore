import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

import Error from "./Error";
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0;
  margin: 2rem 0;
  border-radius: 15px;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
`;
const Datos = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
  .talles {
    margin: 0;
    padding: 0 1rem;
    padding-bottom: 0;
  }
`;

const Precio = styled.h4`
  margin: 0;
  padding: 1rem;
  font-size: 2rem;
`;
const Descripcion = styled.h4`
  margin: 0;
  padding: 1rem;
`;
const Imagen = styled.img`
  width: 17rem;
  border-radius: 25px 25px 5px 5px;
  -moz-border-radius: 25px 25px 5px 5px;
  -webkit-border-radius: 25px 25px 5px 5px;
  border: 0px solid #000000;

  height: 17rem;
  width: 100%;
`;
const AddtoCart = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 25px;
  background-color: #ffa328;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &&:hover {
    background-color: #cb8230;
  }
`;
const ContainerTalle = styled.select`
  padding: 0.4rem 0;
  margin: 1rem;

  option {
  }
`;
const AllProducts = ({ product, handleChange, handleClick, talle }) => {
  return (
    <Card key={nanoid()}>
      <div>
        <Link to={`/products/${product.id}`}>
          <Imagen src={product.imagen} alt="foto" />
        </Link>
      </div>
      <Datos>
        <Descripcion>{product.title}</Descripcion>
        <h4 className="talles">Talles disponibles</h4>
        <ContainerTalle onChange={handleChange} value={talle}>
          {product.size.map((tallezovich, index) => {
            if (index === 0) {
              return (
                <option key={nanoid()} value="">
                  --Seleccionar Talle--
                </option>
              );
            }
            return (
              <option key={nanoid()} value={tallezovich}>
                {tallezovich}
              </option>
            );
          })}
        </ContainerTalle>
        {product.error ? (
          <Error message="Elegi el talle antes de agregar al carrito" />
        ) : null}
        <Precio>${Number(product.price)}</Precio>

        <AddtoCart onClick={() => handleClick(product.id, product.price)}>
          Agregar al Carrito
        </AddtoCart>
      </Datos>
    </Card>
  );
};

export default AllProducts;
