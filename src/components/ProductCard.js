import styled from "styled-components";
import { products } from "./../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: wrap;

  padding: 0;
  @media all and (min-width: 720px) {
    flex-direction: row;
  }
`;
const Card = styled.div`
  box-shadow: 11px 10px 11px -5px rgba(0, 0, 0, 0.49);
  -webkit-box-shadow: 11px 10px 11px -5px rgba(0, 0, 0, 0.49);
  -moz-box-shadow: 11px 10px 11px -5px rgba(0, 0, 0, 0.49);
  padding: 0;
`;
const Datos = styled.div`
  background-color: #e6e6e6;
`;
const Marca = styled.h3`
  margin: 0;
  padding: 2rem;
  flex-grow: 1;
`;
const Precio = styled.h4`
  margin: 0;

  padding: 2rem;
`;
const Descripcion = styled.h4`
  margin: 0;

  padding: 2rem;
`;
const Imagen = styled.img`
  width: 17rem;
  height: 17rem;
  border-bottom: 0.3px solid #000;
`;
const AddtoCart = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 25px;
  background-color: #00ff3f;
  cursor: pointer;
`;
const Productcard = () => {
  return (
    <Container>
      {products.map((product) => (
        <Card>
          <div key={product.id}>
            <Imagen src={product.image} alt="foto" />
          </div>
          <Datos>
            <Marca>{product.brand}</Marca>
            <Precio>{product.price}</Precio>
            <Descripcion>{product.description}</Descripcion>
            <AddtoCart>Agregar al Carrito</AddtoCart>
          </Datos>
        </Card>
      ))}
    </Container>
  );
};

export default Productcard;
