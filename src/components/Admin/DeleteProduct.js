import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import fire from "./../../firebaseConfig";
import { IoCloseSharp } from "react-icons/io5";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 50vh;
  width: 100%;
`;
const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 100vh;
  border: 1px solid #000;
`;
const Imagen = styled.img`
  width: 3rem;
  height: 3rem;
`;
const DeleteProduct = () => {
  const [localProducts, setLocalProducts] = useState([]);
  const handleClick = (id) => {
    const db = fire.firestore();
    console.log(db.collection("productos").doc().id);
  };
  useEffect(() => {
    const getProducts = async () => {
      const db = fire.firestore();
      const docRef = db.collection("productos");
      let products = [];
      await docRef
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots

            products.push(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      setLocalProducts(products);
    };
    getProducts();
  }, []);
  if (!localProducts.length) {
    return <Spinner />;
  } else {
    return (
      <Container>
        {localProducts.map((product) => (
          <Card key={nanoid()}>
            <Imagen src={product.imagen} alt="productimg" />
            <h4>{product.title}</h4>
            <h4>{product.description}</h4>
            <p>{product.price}</p>
            <IoCloseSharp
              size="44px"
              color="black"
              cursor="pointer"
              onClick={() => handleClick(product.id)}
            />
          </Card>
        ))}
      </Container>
    );
  }
};

export default DeleteProduct;
