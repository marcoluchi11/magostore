import styled from "styled-components";
const Container = styled.section`
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
`;
const SocialMedia = () => {
  return (
    <Container>
      <div>
        <img
          src="https://icongr.am/fontawesome/whatsapp.svg?size=40&color=currentColor"
          alt="whatsapp"
        />
        <h4> Whatsapp</h4>
        <p>3402419106</p>
      </div>
      <div>
        <img
          src="https://icongr.am/fontawesome/envelope-o.svg?size=40&color=currentColor
"
          alt="mail"
        />
        <h4>Email</h4>
        <p>Mago.store@gmail.com</p>
      </div>
      <div>
        <img
          src="https://icongr.am/fontawesome/map-pin.svg?size=30&color=currentColor

"
          alt="location"
        />
        <h4> Ubicacion</h4>
        <p>Belgrano 755, Arroyo Seco, Santa Fé</p>
      </div>
    </Container>
  );
};

export default SocialMedia;
