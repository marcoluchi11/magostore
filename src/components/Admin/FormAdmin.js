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

// Lo que buscás para tus jornadas de mayor esfuerzo, complementá tu outfit con La Remera Nike Pro Warm Terma Tight su diseño ajustado, cuello redondo y tejido con tecnología Dri Fit absorbe el sudor mintiéndote seco, fresco durante y después de competencia; Entrená con todo el confort y sin sudar de más, y mantené la concentración mientras pones tus límites cada vez más lejos.
