import NavLinks from "./Navlinks";
import styled from "styled-components";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
const Container = styled.nav`
  .hamburger {
    margin: 1rem;
  }

  @media all and (min-width: 720px) {
    display: none;
  }
`;
const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  const HamburgerButton = (
    <FiMenu
      className="hamburger"
      size="40px"
      color="white"
      onClick={handleClick}
    />
  );

  const CloseIcon = (
    <IoCloseSharp
      className="hamburger"
      size="40px"
      color="white"
      onClick={handleClick}
    />
  );

  return (
    <Container>
      {open ? CloseIcon : HamburgerButton}
      {open && <NavLinks handleClick={handleClick} />};
    </Container>
  );
};

export default MobileNav;
