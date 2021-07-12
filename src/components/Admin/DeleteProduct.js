import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import fire from "./../../firebaseConfig";
import { IoCloseSharp } from "react-icons/io5";
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 50vh;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0.5rem 0;

  border: 1px solid #000;
  @media all and (min-width: 720px) {
    flex-direction: row;
    min-width: 100vh;
  }
`;
const Imagen = styled.img`
  width: 3rem;
  height: 3rem;
`;
const DeleteProduct = () => {
  const [localProducts, setLocalProducts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const handleClick = (id) => {
    const eraseProduct = async () => {
      const db = fire.firestore();
      await db
        .collection("productos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === id) {
              db.collection("productos")
                .doc(doc.id)
                .delete()
                .then(() => {
                  console.log(`Document ${doc.id} successfully deleted!`);
                  setDeleted(false);
                })
                .catch((error) => {
                  console.error("Error removing document: ", error);
                });
            }
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });
    };
    eraseProduct();
  };
  useEffect(() => {
    if (deleted === false) {
      setDeleted(true);
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
    }
  }, [deleted]);
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
