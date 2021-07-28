import { nanoid } from "nanoid";
import React, { useEffect, useContext } from "react";
import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CartContext } from "../../context/CartContext";
import fire from "../../firebaseConfig";
import Spinner from "./../Spinner";
const Seccion = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 2.6rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }
  div {
    /* margin: 0.6rem; */
    img {
      width: 11rem;
      height: 11rem;
    }
  }
  @media all and (min-width: 720px) {
    div {
      img {
        width: 15rem;
        height: 15rem;
      }
    }
  }
`;

const Recents = () => {
  const { setProducts, products } = useContext(CartContext);
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
      setProducts(productos);
    }
  };
  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);
  const bpointovich = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  ];

  return (
    <Seccion>
      <h1>Ingresos más recientes</h1>
      <Carousel breakPoints={bpointovich}>
        {products.length === 0 ? (
          <Spinner />
        ) : (
          products.map((prod) => (
            <div key={nanoid()}>
              <Link to={`/products/${prod.id}`}>
                <img src={prod.imagen} alt="product" />
              </Link>

              <h3>{prod.title}</h3>
              <h3>${prod.price}</h3>
            </div>
          ))
        )}
      </Carousel>
    </Seccion>
  );
};

export default Recents;
