import { useEffect, useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import React from "react";
import Added from "./Added";
import { GlassMagnifier } from "react-image-magnifiers";
const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const SeccionImagen = styled.section`
  @media all and (min-width: 720px) {
  }
`;
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
  }
  @media all and (min-width: 720px) {
    div {
      h1 {
        font-size: 2.4rem;
        padding: 1rem 0;
        margin: 0;
      }
    }
  }
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
  let { id } = useParams();
  const [product, setProduct] = useState([
    { imagen: "", title: "", description: "", size: ["M", "L"], price: 0 },
  ]);
  const handleClick = (price) => {
    setTotal(total + price);
    setCart([...cart, product]);
    setAdded(true);
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
            {product.title} - {product.description}
          </h1>
          <small>Item No. {id}</small>
        </div>
        <div>
          <h1>${product.price}</h1>
          <hr />
        </div>
        <div>
          <h3>Talles</h3>
          {/* Solucionar problema talle map undefined */}
          <select name="size" id="size">
            <option>{product.size}</option>
            {/* {product.size.map((prod) => (
            <option value={prod}>{prod}</option>
          ))} */}
          </select>
        </div>
        <AddtoCart onClick={handleClick}>Agregar al Carrito</AddtoCart>
      </SeccionDatos>
      {added && <Added />}
    </Container>
  );
};

export default ProductCard;
