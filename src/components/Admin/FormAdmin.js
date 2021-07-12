import styled from "styled-components";
import React, { useState, useEffect } from "react";
import fire from "../../firebaseConfig";
import { nanoid } from "nanoid";
import Login from "./Login";
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
const Container2 = styled.div`
  display: flex;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 0.7rem;
  p {
    background-color: #ffa328;
    margin: 0.4rem;
    padding: 0.6rem;
    border: 1.5px solid #000;
  }
`;
const FormAdmin = () => {
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    price: "",
    size: [],
  });
  const [upload, setUpload] = useState(false);
  const [login, setLogin] = useState(false);
  const [size, setSize] = useState("");
  useEffect(() => {
    if (upload) {
      fire
        .storage()
        .ref("images")
        .child(image.name)
        .getDownloadURL()
        .then((url) => {
          setUrl(url);
        });
    }
    //eslint-disable-next-line
  }, [upload]);
  const handleUpload = (e) => {
    e.preventDefault();
    fire
      .storage()
      .ref(`images/${image.name}`)
      .put(image)
      .then((snapshot) => {
        console.log("file uploaded!");
        setUpload(true);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = fire.firestore();
    db.collection("productos")
      .add({ ...data, id: nanoid(), imagen: url })
      .then(() => {
        console.log("Value successfully written!");
        setData({ title: "", description: "", price: 0, size: [] });
        setImage(null);
        setUrl("");
        setUpload(false);
      })
      .catch((error) => {
        console.log("Uups! we've had an error", error);
      });
  };
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const handleImage = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };
  const handleTalle = (e) => setSize(e.target.value);
  const addTalle = (e) => {
    e.preventDefault();
    const sizetoadd = size;
    setData({ ...data, size: [...data.size, sizetoadd] });
    setSize("");
  };
  return (
    <Container2>
      {login ? (
        <Formulario onSubmit={handleSubmit}>
          <label htmlFor="title" name="title">
            Titulo
          </label>
          <input
            id="title"
            autoComplete="off"
            onChange={handleChange}
            name="title"
            type="text"
            value={data.title}
          />
          <label name="description">Descripcion</label>
          <input
            autoComplete="off"
            onChange={handleChange}
            name="description"
            type="text"
            value={data.description}
          />
          <label name="price">Precio</label>
          <input
            autoComplete="off"
            onChange={handleChange}
            name="price"
            type="number"
            value={data.price}
          />
          <label htmlFor="talles">Talles</label>
          <input
            autoComplete="off"
            onChange={handleTalle}
            type="text"
            id="talles"
            value={size}
          />
          <button onClick={addTalle}>Agregar talle</button>
          {/* Recorro el array de talle */}
          <Container>
            {data.size.map((talle) => (
              <p key={nanoid()}>{talle}</p>
            ))}
          </Container>
          <label htmlFor="image" name="image">
            Imagen
          </label>
          <input onChange={handleImage} type="file" name="image" id="image" />
          {/* Boton upload sube la imagen y luego agregar mete la url en la db */}
          <button onClick={handleUpload}>Upload</button>
          <input type="submit" value="Agregar producto" />
        </Formulario>
      ) : (
        <Login setLogin={setLogin} />
      )}
    </Container2>
  );
};

export default FormAdmin;

// Lo que buscás para tus jornadas de mayor esfuerzo, complementá tu outfit con La Remera Nike Pro Warm Terma Tight su diseño ajustado, cuello redondo y tejido con tecnología Dri Fit absorbe el sudor mintiéndote seco, fresco durante y después de competencia; Entrená con todo el confort y sin sudar de más, y mantené la concentración mientras pones tus límites cada vez más lejos.