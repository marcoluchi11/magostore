import axios from "axios";
import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Error from "../Error";
import OrderList from "./OrderList";
import PayDetail from "./PayDetail";
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  label {
    margin-top: 1rem;
  }
  input[type="number"] {
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
  input[type="submit"] {
    margin: 0.5rem;
    padding: 0.5rem;
    outline: 0;
    border: 0;
    border-radius: 25px;
    background-color: #ffa328;
    cursor: pointer;
    font-size: 1.2rem;
  }
`;
const SearchOrder = () => {
  const [search, setSearch] = useState("");
  const [paymentData, setPaymentData] = useState(false);
  const [error, setError] = useState({ state: false, msg: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };
  const handleChange = (e) => setSearch(e.target.value);
  const getPayment = () => {
    // catch errors
    if (search.trim() === "") {
      setError({ msg: "No dejes el campo vacio", state: true });
      return;
    }
    if (search.length < 11) {
      setError({ msg: "El ID debe tener 11 digitos", state: true });
      return;
    }
    setError(false);
    const url = `https://api.mercadopago.com/v1/payments/${search}?access_token=APP_USR-1814618454491275-061720-cbaaedf426e0b795a9ef647e57d084e2-777312745`;
    axios
      .get(url)
      .then((response) => {
        setPaymentData(response.data);
      })
      .catch(() => {
        setError({ state: true, msg: "Error en servidor o ID invalido" });
      });
  };
  return (
    <Fragment>
      <Formulario onSubmit={handleSubmit}>
        <label htmlFor="id">Id. de pago</label>
        <input
          placeholder="Ingresa ID. de pago..."
          onChange={handleChange}
          type="number"
          name="id"
          id="id"
          value={search}
        />
        <input type="submit" value="Buscar" onClick={getPayment} />
      </Formulario>
      {error.msg && <Error message={error.msg} />}
      {paymentData && <PayDetail payment={paymentData} />}
      {paymentData ? null : <OrderList />}
    </Fragment>
  );
};

export default SearchOrder;
