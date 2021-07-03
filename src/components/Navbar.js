import { Link } from "react-router-dom";
import styled from "styled-components";
import { useContext } from "react";
import { CartContext } from "./../context/CartContext";
const Nav = styled.nav`
  background-color: #ffa328;
  /* padding: 1rem; */
  position: sticky;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const Imagen = styled.img`
  border-radius: 50%;
  margin: 0;
  padding: 0;
  margin: 0.5rem;
  width: 8rem;
  height: 8rem;
  @media all and (min-width: 720px) {
    font-size: 2rem;
    padding: 0.5rem;
    margin: 0.5rem;
  }
`;

// const Divisor = styled.div`
//   display: flex;
//   flex-direction: column;

//   @media all and (min-width: 720px) {
//     flex-direction: row;
//     padding: 1rem;
//     margin: 1rem;
//   }
// `;
const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: center;
  font-weight: 300;
  margin: 0;
  padding: 0;
  @media all and (min-width: 720px) {
    flex-direction: row;
    /* padding: 1rem;
    margin: 1rem; */
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

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <Nav>
      {/* LA IDEA SERIA AGREGAR UN LOGO */}

      <Link to="/">
        <Imagen
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf1TFyFvrC0oPEfSGfHHOmgiIhDnMq6AGwtRSTGkm9NulrxrmroJM3qQwWOMczKXVXRI&usqp=CAU"
          alt="logo"
        />
      </Link>

      <Lista>
        <ItemLista>
          <Link to="/products">Productos</Link>
        </ItemLista>
        <ItemLista>
          <Link to="/faq">Preguntas Frecuentes</Link>
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
            <p>({cart.length})</p>
          </Link>
        </ItemLista>
      </Lista>
    </Nav>
  );
};

export default Navbar;
