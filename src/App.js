import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import React from "react";
import PreguntasFrecuentes from "./components/Faq";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home/MainHome";
import CartProvider from "./context/CartContext";
import FormAdmin from "./components/Admin/FormAdmin";
import ProductList from "./components/ProductList";
import ProductCard from "./components/ProductCard";
function App() {
  return (
    <Router>
      <CartProvider>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={ProductList}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/faq" component={PreguntasFrecuentes}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/admin" component={FormAdmin}></Route>
            <Route exact path="/products/:id" component={ProductCard}></Route>
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
