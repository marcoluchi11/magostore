import { Link } from "react-router-dom";
import styled from "styled-components";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  color: #000;
  min-height: 50vh;
  align-items: center;
  img {
    margin: 0;
    padding: 1rem;
  }
  h1 {
    font-weight: 400;
  }
  @media all and (min-width: 720px) {
    font-size: 1.3rem;
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
      <h1>Llegó la Mago-Store Online</h1>
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
