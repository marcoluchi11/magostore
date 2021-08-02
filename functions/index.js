const functions = require("firebase-functions");
let cors = require("cors");
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
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});
// app.post("/webhook", (req, res) => {
//   if (req.method === "POST") {
//     let body = "";
//     req.on("data", (chunk) => {
//       body += chunk.toString();
//     });
//     req.on("end", () => {
//       console.log(body, "webhook response");
//       res.end("ok");
//     });
//   }
//   return res.status(200);
// });
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
    notification_url: "https://enzn6a8d8g3mztz.m.pipedream.net",
    back_urls: {
      success: "http://localhost:4000/feedback",
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
  res.sendStatus(200);
});
app.listen(port, () => {
  console.log(`server up and running on port ${port}`);
});
exports.app = functions.https.onRequest(app);

//https://api.mercadopago.com/v1/payments/16167880882?access_token=APP_USR-1814618454491275-061720-cbaaedf426e0b795a9ef647e57d084e2-777312745
