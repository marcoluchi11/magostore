import styled from "styled-components";
import React, { useContext } from "react";
import { CartContext } from "./../../context/CartContext";
const Container = styled.form`
  display: flex;
  div {
    background-color: #f2f2f2;

    border-bottom-left-radius: 5px;
    border-top-left-radius: 5px;
    img {
      padding: 0.3rem;
      margin: 0.2rem;
    }
  }
  input[type="text"] {
    padding: 0.3rem 0.5rem;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border: 0;
  }
`;
const InputSearch = () => {
  const { search, setSearch } = useContext(CartContext);

  const handleChange = (e) => setSearch(e.target.value.toLowerCase());
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };
  return (
    <Container onSubmit={handleSubmit}>
      <div>
        <img
          src="https://icongr.am/fontawesome/search.svg?size=15&color=currentColor"
          alt="search"
        />
      </div>
      <input
        onChange={handleChange}
        autoComplete="off"
        type="text"
        name="search"
        placeholder="Busca productos..."
        id="search"
        value={search}
      />
    </Container>
  );
};

export default InputSearch;
