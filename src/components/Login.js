import React, { useState, useEffect } from "react";
import styled from "styled-components";
import fire from "./../firebaseConfig";
import Error from "./Error";
const Container = styled.section`
  background-color: #ffa328;
  border-radius: 10px;

  width: 25%;
  padding: 1rem;
  margin: 1rem;
`;
const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  input {
    border-radius: 10px;
    padding: 0.2rem;
    outline: 0;
    border: 0;
  }
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    label {
      margin: 0.3rem 0;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    label {
      margin: 0.3rem 0;
    }
  }
`;
const BotonSubmit = styled.input`
  margin: 1rem;
  padding: 0.6rem;
  outline: 0;
  border: 0;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #000;
  width: 50%;
  background-color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &&:hover {
    background-color: #f1f1f1;
  }
`;
const Login = ({ setLogin }) => {
  const [admin, setAdmin] = useState({ email: "", password: "" });
  const [loginerror, setLoginError] = useState("");
  const handleChange = (e) =>
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    });
  }, []);
  const handleLogin = (e) => {
    e.preventDefault();

    if (admin.email.trim() === "" || admin.password.trim() === "") {
      setLoginError("Ingrese los datos correctamente");
      return;
    }
    fire
      .auth()
      .signInWithEmailAndPassword(admin.email, admin.password)
      .then(() => {
        setLogin(true);
        setLoginError(false);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setLoginError(err.message);
            break;

          case "auth/wrong-password":
            setLoginError(err.message);
            // setPasswordError(err.message);
            break;
          default:
            setLoginError(err.message);
        }
      });
  };
  return (
    <Container>
      <Formulario onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Nombre de Usuario</label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            id="email"
            value={admin.email}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            id="password"
            value={admin.password}
          />
        </div>
        {loginerror && <Error message={loginerror} />}
        <BotonSubmit type="submit" value="Ingresar" />
      </Formulario>
    </Container>
  );
};

export default Login;
