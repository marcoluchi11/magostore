import styled from "styled-components";
import React from "react";
const ContainerError = styled.div`
  padding: 1rem;
  margin: 1rem;
  background-color: #cc0000;
  border-radius: 15px;
  color: #fff;
`;

const Error = ({ message = "Ocurrió un error" }) => {
  return (
    <ContainerError>
      <h4>Error - {message}</h4>
    </ContainerError>
  );
};

export default Error;
