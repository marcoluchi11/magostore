import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  background-color: #ffb760;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  border-radius: 10px;
`;
const Header = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  letter-spacing: 3px;
`;
const Divisor = styled.div`
  display: flex;
`;
const Paragraph = styled.p`
  padding: 1rem;
  margin: 1rem;
  font-size: 1.4rem;
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
      <Divisor>
        <Paragraph>
          <Link to="/products">Productos</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/whoarewe">Quienes somos</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/contact">Contacto</Link>
        </Paragraph>
      </Divisor>
    </Nav>
  );
};

export default Navbar;
