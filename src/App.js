import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import PreguntasFrecuentes from "./components/Faq";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Home from "./components/Home";
import CartProvider from "./context/CartContext";
import FormAdmin from "./components/FormAdmin";
import Productcard from "./components/ProductCard";
function App() {
  return (
    <Router>
      <CartProvider>
        <main>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/products" component={Productcard}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/faq" component={PreguntasFrecuentes}></Route>
            <Route exact path="/cart" component={Cart}></Route>
            <Route exact path="/admin" component={FormAdmin}></Route>
          </Switch>
        </main>
        <Footer />
      </CartProvider>
    </Router>
  );
}

export default App;
