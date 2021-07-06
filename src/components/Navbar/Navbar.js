import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";
import React from "react";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";
import InputSearch from "./InputSearch";
const Nav = styled.nav`
  background-color: #ffa328;
  /* padding: 1rem; */
  position: sticky;
  align-items: center;
  display: flex;
  /* flex-direction: column; */
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
const Container = styled.div`
  display: none;

  @media all and (min-width: 720px) {
    display: inherit;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Link to="/">
        <Imagen
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf1TFyFvrC0oPEfSGfHHOmgiIhDnMq6AGwtRSTGkm9NulrxrmroJM3qQwWOMczKXVXRI&usqp=CAU"
          alt="logo"
        />
      </Link>
      <InputSearch />
      <Container>
        <NavLinks />
      </Container>
      <MobileNav />
    </Nav>
  );
};

export default Navbar;
