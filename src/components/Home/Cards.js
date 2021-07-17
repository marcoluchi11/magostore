import styled from "styled-components";
import { FaTruck, FaStar, FaMoneyCheckAlt, FaQuestion } from "react-icons/fa";
const Seccion = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  align-items: center;
  min-height: 100vh;
  article {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    margin: 1rem;
    width: 15rem;
    height: 22rem;
    padding: 1rem 0.5rem;
    text-align: center;
    border-radius: 5px;
    justify-content: space-evenly;
    align-items: center;
    border: 0px solid #fff;
    transition: border 0.5s linear;
    &&:hover {
      border: 3px solid #fff;
    }
    h3 {
      color: #000;
    }
    p {
      font-size: 1rem;
      color: #656565;
    }
  }
  @media all and (min-width: 720px) {
    flex-direction: row;
    justify-content: center;
  }
`;
const Cards = () => {
  return (
    <Seccion>
      <article>
        <div>
          <FaTruck size="40px" color="#bc0938" cursor="pointer"></FaTruck>
          <h3>Envío gratis</h3>
        </div>
        <p>Hacemos envíos a todo el país mediante Correo Argentino</p>
      </article>
      <article>
        <div>
          <FaStar size="40px" color="#bc0938" cursor="pointer"></FaStar>
          <h3>Calidad de productos</h3>
        </div>
        <p>Nuestros productos cuentan con garantía de 6 meses</p>
      </article>
      <article>
        <div>
          <FaMoneyCheckAlt
            size="40px"
            color="#bc0938"
            cursor="pointer"
          ></FaMoneyCheckAlt>
          <h3>Reembolso completo</h3>
        </div>
        <p>¿No cumple tus expectativas? Te devolvemos el total del dinero</p>
      </article>
      <article>
        <div>
          <FaQuestion size="40px" color="#bc0938" cursor="pointer"></FaQuestion>
          <h3>¿Ténes otra duda ?</h3>
        </div>
        <p> Comunicate con nosotros</p>
      </article>
    </Seccion>
  );
};

export default Cards;
