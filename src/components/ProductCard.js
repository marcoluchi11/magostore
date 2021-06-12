import styled from "styled-components";
import { products } from "./../data";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;

  padding: 0;
  @media all and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 0;
  margin: 2rem 0;
  border-radius: 15px;
  max-width: 20rem;
  display: flex;
  flex-direction: column;
`;
const Datos = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Precio = styled.h4`
  margin: 0;
  padding: 1rem;
`;
const Descripcion = styled.h4`
  margin: 0;
  padding: 1rem;
`;
const Imagen = styled.img`
  width: 17rem;
  border-radius: 25px 25px 5px 5px;
  -moz-border-radius: 25px 25px 5px 5px;
  -webkit-border-radius: 25px 25px 5px 5px;
  border: 0px solid #000000;

  height: 17rem;
  width: 100%;
`;
const AddtoCart = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  outline: 0;
  border: 0;
  border-radius: 25px;
  background-color: #ffa328;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &&:hover {
    background-color: #cb8230;
  }
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
            <Descripcion>
              {product.description} - {product.brand}
            </Descripcion>

            <Precio>{product.price}</Precio>

            <AddtoCart>Agregar al Carrito</AddtoCart>
          </Datos>
        </Card>
      ))}
    </Container>
  );
};

export default Productcard;
