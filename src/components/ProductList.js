import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";
import styled from "styled-components";
import Spinner from "./Spinner";
import React from "react";
import fire from "../firebaseConfig";
import Added from "./Added";
import foto from "./../images/IMG-20210630-WA0050.jpg";
import FilteredProducts from "./FilteredProducts";
import AllProducts from "./AllProducts";
import { nanoid } from "nanoid";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background: url(${foto}) repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  padding: 0;
  @media all and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const ProductList = () => {
  const {
    cart,
    products,
    added,
    total,
    search,
    setTotal,
    setAdded,
    setProducts,
    setCart,
  } = useContext(CartContext);
  const [talle, setTalle] = useState("");

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem("cart"));
    if (local !== null) {
      setCart(local);
    }
    // eslint-disable-next-line
  }, []);
  const getProducts = async () => {
    if (products.length === 0) {
      let productos = [];
      const db = fire.firestore();
      await db
        .collection("productos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const newProduct = {
              imagen: doc.data().imagen,
              title: doc.data().title,
              description: doc.data().description,
              price: Number(doc.data().price),
              id: doc.data().id,
              size: doc.data().size,
              error: false,
              date: doc.data().date,
            };
            productos.push(newProduct);
          });
        });

      setProducts(productos.sort((x, y) => y.date - x.date));
    }
  };
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, [setProducts]);
  const handleClick = (id, price) => {
    let addProduct = products.find((product) => product.id === id);
    addProduct.talle = talle;
    if (talle === "") {
      let errorProduct = products;
      errorProduct = errorProduct.map((product, index) => {
        if (product.id === id) {
          return { ...product, error: true };
        } else {
          return product;
        }
      });
      setProducts(errorProduct);
      return;
    }
    addProduct.error = false;
    setTalle("");
    setTotal(total + price);
    setCart([...cart, addProduct]);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  };
  const handleChange = (e) => setTalle(e.target.value);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let totalLocal = 0;
    cart.forEach((product) => {
      totalLocal += product.price;
    });
    setTotal(totalLocal);
  }, [cart, setTotal]);

  if (!products.length) {
    return <Spinner />;
  } else {
    return (
      <Container>
        {search === "" ? (
          products.map((product) => (
            <AllProducts
              key={nanoid()}
              product={product}
              handleChange={handleChange}
              handleClick={handleClick}
              talle={talle}
            />
          ))
        ) : (
          <FilteredProducts
            handleChange={handleChange}
            handleClick={handleClick}
            talle={talle}
          />
        )}

        {added && <Added />}
      </Container>
    );
  }
};

export default ProductList;
