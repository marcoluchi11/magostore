const express = require("express");
const port = 4000;
const app = express();
const mercadopago = require("mercadopago");
const bodyParser = require("body-parser");
mercadopago.configure({
  access_token:
    //CREDENCIAL DEL VENDEDOR
    "APP_USR-1814618454491275-061720-cbaaedf426e0b795a9ef647e57d084e2-777312745",
});
//Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});
app.post("/checkout", (req, res) => {
  const products = JSON.parse(req.body.cart);
  const productos = products.map((product) => {
    const { id, title, description, price, talle, imagen } = product;

    return {
      id,
      category_id: "others",
      title: `${title} - Talle${talle}`,
      unit_price: price,
      description,
      picture_url: imagen,
      quantity: 1,
    };
  });
  console.log(productos);
  let preference = {
    items: productos,
    statement_descriptor: "Mago-Store",
    // back_urls: {
    //   success: "https://mago-store.web.app/success",
    //   failure: "https://mago-store.web.app/error",
    //   pending: "https://mago-store.web.app/pending",
    // },
    // auto_return: "approved",
    // payment_methods: {
    //   excluded_payment_methods: [
    //     {
    //       id: "amex",
    //     },
    //   ],
    //   excluded_payment_types: [
    //     {
    //       id: "ticket",
    //     },
    //   ],
    //   installments: 12,
    // },
  };
  mercadopago.preferences
    .create(preference)
    .then((response) => {
      res.json(response.body);
      // res.redirect(response.body.sandbox_init_point);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.use(express.urlencoded({ extended: false }));
app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});
module.exports = app;
