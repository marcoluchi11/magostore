import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  font-weight: 300;
  margin: 0;
  padding: 0;
  transition: 3s ease-in;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const ItemLista = styled.li`
  padding: 0.7rem;
  margin: 0.5rem;
  font-size: 1.1rem;
  .cart {
    display: flex;
    align-items: flex-start;
  }
  @media all and (min-width: 720px) {
    font-size: 1.4rem;
    padding: 1rem;
    margin: 1rem;
  }
`;

const NavLinks = ({ handleClick }) => {
  const { cart } = useContext(CartContext);
  return (
    <Lista>
      <ItemLista>
        <Link onClick={handleClick} to="/products">
          Productos
        </Link>
      </ItemLista>
      <ItemLista>
        <Link onClick={handleClick} to="/faq">
          Preguntas Frecuentes
        </Link>
      </ItemLista>
      <ItemLista>
        <Link onClick={handleClick} to="/contact">
          Contacto
        </Link>
      </ItemLista>
      <ItemLista>
        <Link onClick={handleClick} className="cart" to="/cart">
          <img
            src="https://icongr.am/fontawesome/cart-arrow-down.svg?size=30&color=currentColor"
            alt="cart"
          />
          <p>({cart.length})</p>
        </Link>
      </ItemLista>
    </Lista>
  );
};

export default NavLinks;
