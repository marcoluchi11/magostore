import { useContext, useEffect, useState } from "react";
import { CartContext } from "./../context/CartContext";
import styled from "styled-components";
import fire from "./../firebaseConfig";
import Error from "./Error";
import { nanoid } from "nanoid";
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
  .talles {
    margin: 0;
    padding: 0 1rem;
    padding-bottom: 0;
  }
`;

const Precio = styled.h4`
  margin: 0;
  padding: 1rem;
  font-size: 2rem;
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
const ContainerTalle = styled.select`
  padding: 0.4rem 0;
  margin: 1rem;

  option {
  }
`;
const Productcard = () => {
  const { cart, products, total, setTotal, setProducts, setCart } =
    useContext(CartContext);
  const [talle, setTalle] = useState("");

  useEffect(() => {
    if (products.length === 0) {
      let productos = [];
      const db = fire.firestore();
      db.collection("productos")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const newProduct = {
              imagen: doc.data().imagen,
              title: doc.data().title,
              description: doc.data().description,
              price: Number(doc.data().price),
              id: doc.data().id,
              size: doc.data().size,
              error: false,
            };
            productos.push(newProduct);
          });
        });

      setProducts(productos);
    }

    // eslint-disable-next-line
  }, [setProducts]);
  const handleClick = (id, price) => {
    // console.log(e.target);
    let addProduct = products.find((product) => product.id === id);
    addProduct.talle = talle;
    if (talle === "") {
      let errorProduct = products;
      errorProduct = errorProduct.map((product, index) => {
        if (product.id === id) {
          console.log(`entra en la vuelta ${index}`);

          return { ...product, error: true };
        } else {
          return product;
        }
      });
      setProducts(errorProduct);
      return;
    }
    addProduct.error = false;
    setTotal(total + price);
    setTalle("");
    setCart([...cart, addProduct]);
  };
  const handleChange = (e) => setTalle(e.target.value);

  return (
    <Container>
      {products.map((product) => (
        <Card key={nanoid()}>
          <div>
            <Imagen src={product.imagen} alt="foto" />
          </div>
          <Datos>
            <Descripcion>{product.description} - Nike</Descripcion>
            <h4 className="talles">Talles disponibles</h4>
            <ContainerTalle onChange={handleChange} value={talle}>
              {product.size.map((tallezovich) => (
                <option key={nanoid()} value={tallezovich}>
                  {tallezovich}
                </option>
              ))}
            </ContainerTalle>
            {product.error ? (
              <Error message="Elegi el talle antes de agregar al carrito" />
            ) : null}
            <Precio>${Number(product.price)}</Precio>
            <AddtoCart onClick={() => handleClick(product.id, product.price)}>
              Agregar al Carrito
            </AddtoCart>
          </Datos>
        </Card>
      ))}
    </Container>
  );
};

export default Productcard;
