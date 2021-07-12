import styled from "styled-components";
import React, { useState } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;

const FormAdmin = () => {
  const [action, setAction] = useState("");
  const [login, setLogin] = useState(false);
  return (
    <Container2>
      {login ? (
        <Welcome setAction={setAction} action={action} />
      ) : (
        <Login setLogin={setLogin} />
      )}
    </Container2>
  );
};

export default FormAdmin;
