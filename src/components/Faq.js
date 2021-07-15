import styled from "styled-components";
import React from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: auto;
  h1 {
    margin: 0.5rem;
    padding: 0.5rem;
  }
  h4 {
    font-weight: 300;
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;
const PreguntasFrecuentes = () => {
  return (
    <Container>
      <h1>¿Como comprar?</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
        suscipit veniam ab velit harum odio quos tempore, nulla dolorum expedita
        quisquam totam eaque facere rerum! Quis laudantium, exercitationem sunt
        aperiam optio blanditiis nisi mollitia facere, inventore aliquid, quo
        sint?
      </h4>
      <h1>¿Hacen envíos?</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
        suscipit veniam ab velit harum odio quos tempore, nulla dolorum expedita
        quisquam totam eaque facere rerum! Quis laudantium, exercitationem sunt
        aperiam optio blanditiis nisi mollitia facere, inventore aliquid, quo
        sint?
      </h4>
      <h1>¿Hay reembolso de compra?</h1>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore dolore
        suscipit veniam ab velit harum odio quos tempore, nulla dolorum expedita
        quisquam totam eaque facere rerum! Quis laudantium, exercitationem sunt
        aperiam optio blanditiis nisi mollitia facere, inventore aliquid, quo
        sint?
      </h4>
      <h1>¿No hay de tu talle?</h1>
      <h4>
        Comunicate con nosotros por Whatsapp o por mail, y te lo resolveremos a
        la brevedad.
      </h4>
    </Container>
  );
};

export default PreguntasFrecuentes;
