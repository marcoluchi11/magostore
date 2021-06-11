import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ffb760;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const Header = styled.h1`
  font-size: 1.4rem;
  padding: 0.5rem;
  margin: 0.5rem;
  letter-spacing: 3px;
  @media all and (min-width: 720px) {
    font-size: 2rem;
    padding: 1rem;
    margin: 1rem;
  }
`;
const Divisor = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 720px) {
    flex-direction: row;
    padding: 1rem;
    margin: 1rem;
  }
`;
const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  @media all and (min-width: 720px) {
    flex-direction: row;
    padding: 1rem;
    margin: 1rem;
  }
`;
const ItemLista = styled.li`
  padding: 0.5rem;
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

const Navbar = () => {
  return (
    <Nav>
      <Divisor>
        {/* LA IDEA SERIA AGREGAR UN LOGO */}
        <Header>
          <Link to="/">MagoStore</Link>
        </Header>
      </Divisor>
      <Lista>
        <ItemLista>
          <Link to="/products">Productos</Link>
        </ItemLista>
        <ItemLista>
          <Link to="/faq">PreguntasFrecuentes</Link>
        </ItemLista>
        <ItemLista>
          <Link to="/contact">Contacto</Link>
        </ItemLista>
        <ItemLista>
          <Link className="cart" to="/cart">
            <img
              src="https://icongr.am/fontawesome/cart-arrow-down.svg?size=30&color=currentColor"
              alt="cart"
            />
            <p>(0)</p>
          </Link>
        </ItemLista>
      </Lista>
    </Nav>
  );
};

export default Navbar;
