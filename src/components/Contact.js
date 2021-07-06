import SocialMedia from "./SocialMedia";
import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Media = styled.div`
  margin: 3rem;
`;
const Formulario = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      width: 50%;
    }
    input {
      width: 50%;
      margin: 0.7rem;
      padding: 0.5rem;
    }
    textarea {
      width: 50%;
      margin: 0.7rem;
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
  }
`;
const Contact = () => {
  return (
    <Container>
      <Media>
        <SocialMedia />
      </Media>
      <Formulario>
        <form>
          <label htmlFor="name">Nombre</label>
          <input autoComplete="off" type="text" name="name" id="name" />
          <label htmlFor="email">Email</label>
          <input autoComplete="off" type="email" name="email" id="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <input type="submit" value="Enviar Consulta" />
        </form>
      </Formulario>
    </Container>
  );
};

export default Contact;
