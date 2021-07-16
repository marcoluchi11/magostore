import { Fragment } from "react";
import styled from "styled-components";
import "./Footer.css";
import React from "react";
import Logo from "../Navbar/Logo";
const DivUbicacion = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    margin: 0;
    padding: 0;
  }
  p {
    margin: 0;
    padding: 0.3rem 0;
  }
`;
const SocialMedia = styled.div`
  .socialmedia {
    display: flex;
    margin: 1rem;
    justify-content: space-around;
  }
`;
const Copyright = styled.small`
  display: block;
  margin: 0;
  text-align: center;
  background-color: #ffa328;
`;
const Footer = () => {
  return (
    <Fragment>
      <footer>
        <DivUbicacion>
          <h3>Ubicación</h3>
          <p>Belgrano 755</p>
          <p>Arroyo Seco, Santa Fé</p>
          <p>Argentina</p>
        </DivUbicacion>
        <Logo />
        <SocialMedia>
          <h3>¡Seguinos en nuestras redes!</h3>
          <div className="socialmedia">
            <a
              href="https://www.instagram.com/magostore.basketball/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://icongr.am/fontawesome/instagram.svg?size=30&color=currentColor"
                alt="ig"
              />
            </a>
            <a
              href="https://www.facebook.com/magostorebasketball-107206261108105/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://icongr.am/fontawesome/facebook-official.svg?size=30&color=currentColor"
                alt="fb"
              />
            </a>
            <a
              href="https://wa.me/543402419106"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="https://icongr.am/fontawesome/whatsapp.svg?size=30&color=currentColor

"
                alt="whatsapp"
              />
            </a>
          </div>
        </SocialMedia>
      </footer>

      <Copyright> ©2021 - Realizado por Marco Luchi</Copyright>
    </Fragment>
  );
};

export default Footer;
