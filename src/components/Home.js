import foto2 from "./../images/IMG-20210630-WA0055.jpg";
import foto from "./../images/IMG-20210630-WA0050.jpg";
import styled from "styled-components";
import React from "react";
const Container = styled.div`
  width: 100%;
  background: url(${foto}) repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100vh;
`;
const Imagen = styled.img`
  /* background-repeat: no-repeat;
  background-size: cover; */

  width: 25rem;
  height: 25rem;
`;
const Home = () => {
  return <Container></Container>;
};

export default Home;
