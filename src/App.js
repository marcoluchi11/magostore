import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Whoarewe from "./components/Whoarewe";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <main>
        <Navbar />
        <Switch>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/whoarewe" component={Whoarewe}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
