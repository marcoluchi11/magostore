import { Link } from "react-router-dom";
import styled from "styled-components";
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
const Logo = () => {
  return (
    <Link to="/">
      <Imagen
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpf1TFyFvrC0oPEfSGfHHOmgiIhDnMq6AGwtRSTGkm9NulrxrmroJM3qQwWOMczKXVXRI&usqp=CAU"
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
