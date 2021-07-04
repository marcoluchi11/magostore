import styled from "styled-components";
import { useEffect } from "react";
const Container = styled.div`
  background-color: lime;

  padding: 0.5rem;
  margin: 0.8rem;
  border-radius: 25px;
  h4 {
    margin: 0;
    padding: 0;
  }
`;
const Added = () => {
  useEffect(() => {
    console.log("Se monto");
  }, []);
  return (
    <Container>
      <h4>Se agregó al carrito con éxito</h4>
    </Container>
  );
};

export default Added;
