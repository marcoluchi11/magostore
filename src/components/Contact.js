import SocialMedia from "./SocialMedia";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;
const Media = styled.div`
  margin: 3rem;
`;
const Formulario = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    label {
      width: 50%;
    }
    input {
      width: 50%;
      margin: 0.7rem;
    }
    textarea {
      width: 50%;
      margin: 0.7rem;
    }
    input[type="submit"] {
      margin: 0.5rem;
      padding: 0.5rem;
      outline: 0;
      border: 0;
      border-radius: 25px;
      background-color: #ffa328;
      cursor: pointer;
      font-size: 1.2rem;
    }
  }
`;
const Contact = () => {
  return (
    <Container>
      <Media>
        <SocialMedia />
      </Media>
      <Formulario>
        <form>
          <label for="name">Nombre</label>
          <input type="text" name="name" id="name" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <label for="message">Mensaje</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <input type="submit" value="Enviar Consulta" />
        </form>
      </Formulario>
    </Container>
  );
};

export default Contact;
