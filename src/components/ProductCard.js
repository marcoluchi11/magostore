import { useEffect, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Spinner from "./Spinner";
import Added from "./Added";
import Error from "./Error";
import { GlassMagnifier } from "react-image-magnifiers";
import { nanoid } from "nanoid";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const SeccionImagen = styled.section``;
const SeccionDatos = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  div {
    align-items: center;
    small {
      text-align: center;
    }

    h1 {
      font-size: 1.8rem;
      padding: 0.5rem 0;
      margin: 0;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      line-height: 2rem;
    }
    select {
      padding: 0.3rem;
      margin: 0.5rem 0;
      width: 100%;
    }
  }
  @media all and (min-width: 720px) {
    div {
      width: 100%;
      margin: 1rem 0;
      h1 {
        font-size: 2.7rem;
        padding: 1rem 0;
        margin: 0;
      }
      select {
        width: 15%;
      }
    }
  }
`;
const ContainerTalle = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  h3 {
    padding-right: 0.5rem;
  }
  select {
    margin: 1rem;
  }
`;
const Precio = styled.div`
  width: 100%;
  align-items: flex-start;
  padding: 0.5rem;
`;
const AddtoCart = styled.button`
  margin: 1.5rem;
  padding: 0.4rem;
  outline: 0;
  border: 0;
  width: 80%;
  font-size: 1.5rem;
  border-radius: 8px;
  background-color: #ffa328;

  @media all and (min-width: 720px) {
    margin: 0.5rem;
    padding: 0.7rem;
    outline: 0;
    border: 0;
    width: 50%;
    font-size: 1.5rem;
    border-radius: 8px;
    background-color: #ffa328;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &&:hover {
      background-color: #cb8230;
    }
  }
`;
const ProductCard = () => {
  const { products, cart, added, total, setCart, setTotal, setAdded } =
    useContext(CartContext);
  const [talle, setTalle] = useState("");
  const [error, setError] = useState(false);
  let { id } = useParams();
  const [product, setProduct] = useState(false);
  const handleClick = (price) => {
    if (talle === "") {
      setError(true);
      return;
    }
    const productTalle = { ...product, talle };
    setError(false);
    setTotal(total + price);
    setCart([...cart, productTalle]);
    setAdded(true);
    setTalle("");
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  };
  useEffect(() => {
    const chosenProduct = products.find((product) => product.id === id);
    setProduct(chosenProduct);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalLocal = 0;
    cart.forEach((product) => {
      totalLocal += product.price;
    });
    setTotal(totalLocal);
  }, [cart, setTotal]);
  const handleChange = (e) => setTalle(e.target.value);

  if (product) {
    return (
      <Container>
        <SeccionImagen>
          <GlassMagnifier
            magnifierSize="15%"
            imageSrc={product.imagen}
            imageAlt="imagen"
          />
        </SeccionImagen>
        <SeccionDatos>
          <div>
            <h1>
              {/* Crear descripcion mas larga */}
              {product.title}
            </h1>
            <small>Item No. {id}</small>

            <h3>{product.description}</h3>
          </div>
          <Precio>
            <h1>${product.price}</h1>
            <hr />
          </Precio>
          <ContainerTalle>
            <h3>Talles disponibles</h3>

            <select onChange={handleChange} value={talle} name="size" id="size">
              {product.size.map((prod, index) => {
                if (index === 0) {
                  return (
                    <option key={nanoid()} value="">
                      --Seleccionar talle--
                    </option>
                  );
                }
                return (
                  <option key={nanoid()} value={prod}>
                    {prod}
                  </option>
                );
              })}
            </select>
            {error && (
              <Error message="Elegi el talle antes de agregar al carrito" />
            )}
            {/* <select>
              <option value={product.size}>{product.size}</option>
            </select> */}
          </ContainerTalle>
          <AddtoCart onClick={handleClick}>Agregar al Carrito</AddtoCart>
        </SeccionDatos>
        {added && <Added />}
      </Container>
    );
  } else {
    return <Spinner />;
  }
};

export default ProductCard;
