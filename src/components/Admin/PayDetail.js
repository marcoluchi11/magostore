import { nanoid } from "nanoid";
import React from "react";
import styled from "styled-components";
const Container = styled.section`
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid black;
  p {
    margin: 0.5rem;
    padding: 0.3rem;
    border: 1px solid black;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
  h2 {
    padding: 0;
    margin: 0;
  }
`;
const DetailPay = ({ payment }) => {
  const {
    installments,
    payment_method_id,
    payment_type_id,
    status,
    status_detail,
    transaction_amount,
    additional_info,
    payer,
    order,
    date_approved,
    date_created,
    date_last_updated,
  } = payment;
  return (
    <Container>
      {additional_info.items.map((item, index) => (
        <div key={nanoid()}>
          <h2>Item {index + 1}</h2>
          <p> {item.title}</p>
          <p>Precio: {item.unit_price}</p>
          <p>Talle: {item.description}</p>
          <p></p>
        </div>
      ))}
      <h4>Cuotas: {installments}</h4>
      <h4>Metodo de pago: {payment_method_id}</h4>
      <h4>Tipo de pago: {payment_type_id}</h4>
      <h4>Detalle de estado: {status_detail}</h4>
      <h4>Estado: {status}</h4>
      <h4>No. de orden: {order.id}</h4>
      <h4>Email de comprador: {payer.email} </h4>
      <h4> Precio de transaccion: ${transaction_amount}</h4>
      <h4>Fecha de Aprobacion: {date_approved}</h4>
      <h4>Fecha de creacion: {date_created}</h4>
      <h4>Fecha de ult. actualizacion: {date_last_updated}</h4>
    </Container>
  );
};

export default DetailPay;
