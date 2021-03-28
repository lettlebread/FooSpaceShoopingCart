import "../style/styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import StoreContainer from "./store.js";
import ProductContainer from "./product.js";
import CartContainer from "./cart.js";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div calss="app">
          <nav>
            <ul>
              <li>
                <Link to="/store/">store</Link>
              </li>
              <li>
                <Link to="/cart/">cart</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={StoreContainer} />
          <Route path="/store" exact component={StoreContainer} />
          <Route path="/store/:productId" exact component={ProductContainer} />
          <Route path="/cart/" exact component={CartContainer} />
        </div>
      </Router>
    );
  }
}

export { App };
