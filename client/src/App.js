import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import WineDetails from "./pages/WineDetails";
import MyCarousel from "./components/Carousel";
import NavAdmin from "./components/Admin/NavAdmin";
import Login from "./pages/Admin";
import Cart from "./pages/Cart";


class App extends React.Component {
  state = {
    User: null,
    cartItems: []
  };

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state));
  };

  handleAddToCart = (wine) => {
    console.log("add wine to cart", wine);
    var exisitingCart = this.state.cartItems;
    this.setState({
      cartItems: [...exisitingCart, wine]
    })
  }

  render() {
    return (
      <div>

        {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
        <MyCarousel />
        <div className="wrapper">
          <div className="scroll" id="container">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route
                  exact
                  path="/admin"
                  render={() => (
                    <Login updateGlobalState={this.updateGlobalState} />
                  )}
                />
                <Route exact path="/wines" 
                render={() => (
                  <Wines onAddToCart = {this.handleAddToCart} />
                )}  
                />
                <Route exact path="/wine/:id" 
                render={(routeProps) => (
                  <WineDetails onAddToCart = {this.handleAddToCart} {...routeProps}/>
                )} 
                />
                <Route 
                  exact path="/cart" 
                  render={() => (
                    <Cart cartItems = {this.state.cartItems} />
                )}
                />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;