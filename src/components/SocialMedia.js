import styled from "styled-components";
import React from "react";
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const Container = styled.section`
  display: none;
  @media all and (min-width: 720px) {
    display: flex;
    justify-content: space-around;
    padding: 1rem;
    div {
      display: flex;
      flex-direction: column;

      align-items: center;
      h4 {
        margin: 0.5rem;
        padding: 0;
      }
      p {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
const SocialMedia = () => {
  return (
    <Container>
      <div>
        <FaWhatsapp size="40px" color="black"></FaWhatsapp>
        <h4>Whatsapp</h4>
        <p>
          <a href="https://wa.me/543402419106">3402419106</a>
        </p>
      </div>
      <div>
        <FaEnvelope size="40px" color="black"></FaEnvelope>
        <h4>Email</h4>
        <p>Mago.store@gmail.com</p>
      </div>
      <div>
        <FaMapMarkerAlt size="40px" color="black"></FaMapMarkerAlt>
        <h4>Ubicacion</h4>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/wXos27VEgr1HDos47"
        >
          <p>Belgrano 755, Arroyo Seco, Santa Fé</p>
        </a>
      </div>
    </Container>
  );
};

export default SocialMedia;
