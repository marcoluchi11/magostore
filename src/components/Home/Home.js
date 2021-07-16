// import foto2 from "./../images/IMG-20210630-WA0055.jpg";
import foto from "./../images/IMG-20210630-WA0051.jpg";
import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 100%;
  background: url(${foto}) repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`;
const Seccion = styled.section`
  display: flex;
  flex-direction: column;
  article {
    background-color: #fff;
    margin: 1rem;
  }
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const Home = () => {
  return (
    <Container>
      <h1>Llegó la Mago-Store Online</h1>
      <Link to="/products">
        <button>Comprar</button>
      </Link>
      <Seccion>
        <article>
          <h3>Envío gratis</h3>
          Llegamos a todo el país
        </article>
        <article>
          <h3>Calidad de productos</h3>
          <p>Nuestros productos cuentan con garantía de 6 meses</p>
        </article>
        <article>
          <h3> Reembolso completo</h3>
          <p>No cumple tus expectativas? Te devolvemos el total del dinero</p>
        </article>
        <article>
          <h3>Tenes otra duda ?</h3>
          <p> Comunicate con nosotros</p>
        </article>
      </Seccion>
    </Container>
  );
};

export default Home;
