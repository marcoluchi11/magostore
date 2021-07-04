import styled from "styled-components";
import { useEffect } from "react";
const Container = styled.div`
  position: fixed;
  right: 1%;
  top: 90%;
  background-color: lime;
  padding: 0.5rem;
  border-radius: 15px;
  h4 {
    margin: 0;
    padding: 0;
  }
`;
const Added = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <h4>Se agregó al carrito con éxito</h4>
    </Container>
  );
};

export default Added;
