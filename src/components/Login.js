import React, { useState } from "react";
import styled from "styled-components";
import fire from "./../firebaseConfig";

const BotonSubmit = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 25px;
  background-color: #ffa328;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &&:hover {
    background-color: #cb8230;
  }
`;
const Login = ({ setLogin }) => {
  const [admin, setAdmin] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setAdmin({ ...admin, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(admin.email, admin.password)
      .then(() => {
        setLogin(true);
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            console.log(err);
            // setEmailError(err.message);
            break;

          case "auth/wrong-password":
            console.log(err);
            // setPasswordError(err.message);
            break;
          default:
            console.log(err);
        }
        setLogin(false);
      });
  };
  return (
    <form onSubmit={handleLogin}>
      <label>Nombre de Usuario</label>
      <input
        onChange={handleChange}
        type="email"
        name="email"
        id="email"
        value={admin.email}
      />
      <label>Contraseña</label>
      <input
        onChange={handleChange}
        type="password"
        name="password"
        id="password"
        value={admin.password}
      />
      <BotonSubmit type="submit" value="Ingresar" />
    </form>
  );
};

export default Login;
