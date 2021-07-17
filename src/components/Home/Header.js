import { Link } from "react-router-dom";
import styled from "styled-components";
import foto from "./../../images/IMG-20210630-WA0049.jpg";
const Header = styled.header`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: url(${foto}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  opacity: 1;
  color: #000;
  min-height: 80vh;
  align-items: center;

  &&::before {
  }
  img {
    margin: 0;
    padding: 1rem;
  }
  h1 {
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-weight: 700;
  }
  @media all and (min-width: 720px) {
    flex-direction: row;
    width: 100%;
    font-size: 2.5rem;
    justify-content: space-evenly;
    h1 {
      width: 60%;
    }
    button {
      width: auto;
    }
  }
`;
const Boton = styled.button`
  display: flex;
  border: 0;
  outline: 0;
  padding: 1rem 2.2rem;
  margin: 1rem;
  font-size: 1.3rem;
  border-radius: 25px;
  background-color: #ffa328;
  cursor: pointer;
  transition: all 0.7s linear;
  img,
  p {
    padding: 0;
    margin: 0 0.2rem;
  }

  &&:hover {
    border: 2px solid #ffa328;
    background-color: #fff;
  }
`;
const Encabezado = () => {
  return (
    <Header>
      <h1>Llegó la Mago-Store Online...</h1>
      <Link className="home" to="/products">
        <Boton>
          <img
            src="https://icongr.am/fontawesome/shopping-cart.svg?size=22&color=currentColor"
            alt="cart"
          />
          <p>Comprar</p>
        </Boton>
      </Link>
    </Header>
  );
};

export default Encabezado;
