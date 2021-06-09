import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Whoarewe from "./components/Whoarewe";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/products" component={Products}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/whoarewe" component={Whoarewe}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
