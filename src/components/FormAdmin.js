import styled from "styled-components";
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    padding: 0.5rem;
    font-size: 1.2rem;
  }
  input {
    width: 15rem;
    border-radius: 25px;
    padding: 0.2rem;
    border: 0.7px solid black;
    outline: 0;
    margin: 0.5rem;
  }
  input[type="file"] {
    border-radius: 0;
    padding: 0.2rem;
    border: 0;
    outline: 0;
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
`;
const FormAdmin = () => {
  return (
    <Formulario>
      <label name="title">Titulo</label>
      <input name="title" type="text" />
      <label name="description">Descripcion</label>
      <input name="description" type="text" />
      <label name="price">Precio</label>
      <input name="price" type="number" />
      <label>Imagen</label>
      <input type="file" />
      <input type="submit" value="Agregar" />
    </Formulario>
  );
};

export default FormAdmin;
