import styled from "styled-components";
const ContainerError = styled.div`
  padding: 1rem;
  margin: 0.5rem;
  background-color: #cc0000;
  border-radius: 25px;
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
