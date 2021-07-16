// import foto2 from "./../images/IMG-20210630-WA0055.jpg";
import foto from "./../../images/IMG-20210630-WA0051.jpg";
import styled from "styled-components";
import React from "react";
import Encabezado from "./Header";
import Cards from "./Cards";
const Container = styled.div`
  width: 100%;
  /* background: url(${foto}) repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 0.7;
  height: 100vh; */
`;

const Home = () => {
  return (
    <Container>
      <Encabezado />
      <Cards />
    </Container>
  );
};

export default Home;
