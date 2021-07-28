import styled from "styled-components";
import "./Navbar.css";
import React from "react";
import NavLinks from "./Navlinks";
import MobileNav from "./MobileNav";
import Logo from "./Logo";
const Nav = styled.nav`
  background-color: #ffa328;
  /* padding: 1rem; */
  position: sticky;
  top: 0;
  z-index: 1020;
  align-items: center;
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
  justify-content: space-between;
  @media all and (min-width: 720px) {
    flex-direction: row;
    position: static;
  }
`;

const Container = styled.div`
  display: none;

  @media all and (min-width: 720px) {
    display: block;
  }
`;
const Navbar = () => {
  return (
    <Nav>
      <Logo />
      <Container>
        <NavLinks />
      </Container>
      <MobileNav />
    </Nav>
  );
};

export default Navbar;
