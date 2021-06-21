import styled from "styled-components";
import { useState, useEffect } from "react";
import fire from "./../firebaseConfig";
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
  const [url, setUrl] = useState("");
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    price: 0,
  });
  const [upload, setUpload] = useState(false);

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
  }, [upload, image]);
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
      .add({ ...data, imagen: url })
      .then(() => {
        console.log("Value successfully written!");
        setData({ title: "", description: "", price: 0 });
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
  return (
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
      <label htmlFor="image" name="image">
        Imagen
      </label>

      <input onChange={handleImage} type="file" name="image" id="image" />
      {url}
      <button onClick={handleUpload}>Upload</button>
      <input type="submit" value="Agregar producto" />
    </Formulario>
  );
};

export default FormAdmin;
