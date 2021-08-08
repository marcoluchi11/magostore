import { nanoid } from "nanoid";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fire from "../../firebaseConfig";
import Spinner from "../Spinner";
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
  h4.descripcion {
    width: 30%;
    white-space: normal;
    overflow: hidden;
  }

  border: 1px solid #000;
  @media all and (min-width: 720px) {
    flex-direction: row;
    min-width: 100vh;
  }
`;
const OrderList = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getOrders = async () => {
      const db = fire.firestore();
      const docRef = db.collection("notifications");
      let orders = [];
      await docRef
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            orders.push(doc.data());
          });
        })
        .catch((error) => {
          console.log("Error getting documents: ", error);
        });

      setOrders(orders);
    };
    getOrders();
  }, []);
  if (!orders.length) {
    return <Spinner />;
  } else {
    return (
      <Container>
        {orders.map((order) => (
          <Card key={nanoid()}>
            <h4>{order.id}</h4>
            <p>{order.topic}</p>
          </Card>
        ))}
      </Container>
    );
  }
};

export default OrderList;
