const functions = require("firebase-functions");
require("dotenv").config();
let cors = require("cors");
const fire = require("./fbConfig");
const express = require("express");
const port = 4000;
const app = express();
const mercadopago = require("mercadopago");
const bodyParser = require("body-parser");
app.use(cors());
mercadopago.configure({
  access_token:
    // CREDENCIAL DEL VENDEDOR
    // eslint-disable-next-line max-len
    "APP_USR-1814618454491275-061720-cbaaedf426e0b795a9ef647e57d084e2-777312745",
});
// åMiddleware
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/", (req, res) => {});

app.post("/checkout", (req, res) => {
  const products = JSON.parse(req.body.cart);
  const productos = products.map((product) => {
    const { id, title, price, talle, imagen } = product;
    return {
      id,
      category_id: "others",
      title: `${title} - Talle ${talle}`,
      unit_price: price,
      picture_url: imagen,
      quantity: 1,
      description: talle,
    };
  });

  let preference = {
    //Productos del carrito
    items: productos,
    //SOLO USUARIOS REGISTRADOS
    // purpose: "wallet_purchase",
    //Cargo en la tarjeta
    statement_descriptor: "Mago-Store",
    notification_url:
      "https://us-central1-mago-store.cloudfunctions.net/app/webhook",
    back_urls: {
      success: "https://forms.gle/C4QszYP7HjU4amLu8",
      failure: "http://localhost:4000/feedback",
      pending: "http://localhost:4000/feedback",
    },
    auto_return: "approved",
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
      res.redirect(response.body.init_point);
    })
    .catch((error) => {
      console.log(error);
      res.send("Hubo un error con mercadopago");
    });
});

app.post("/webhook", (req, res) => {
  if (req.query.hasOwnProperty("topic") && req.query.topic === "payment") {
    const db = fire.firestore();
    db.collection("notifications")
      .add({ ...req.query })
      .then(() => {
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log(error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(201);
  }
});
app.get("/feed", (req, res) => {
  console.log(req.query);
  res.json({ msg: "ok" });
});
app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});
exports.app = functions.https.onRequest(app);

//https://api.mercadopago.com/v1/payments/16246520473?access_token=APP_USR-1814618454491275-061720-cbaaedf426e0b795a9ef647e57d084e2-777312745
