import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import WineDetails from "./pages/WineDetails";
import MyCarousel from "./components/Carousel";
import NavAdmin from "./components/Admin/NavAdmin";
import Admin from "./pages/Admin";
import Login from "./components/LoginForm";
import Cart from "./pages/Cart";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import OurProducers from "./pages/OurProducers";
import FAQs from "./pages/FAQs";

class App extends React.Component {
  state = {
    User: null,
    loggedIn: false,
    showModal: false,
    loginError: "",
    cartItems: []
  };

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state));
  };
  
  getGlobalState = (name) => {
    return this.state[name];
  }

  handleAddToCart = (wine) => {
    console.log("add wine to cart", wine);
    var exisitingCart = this.state.cartItems;
    this.setState({
      cartItems: [...exisitingCart, wine]
    })
  }

  render() {
    return (
      <Router>
        <div>
          <Login updateGlobalState={this.updateGlobalState} getGlobalState={this.getGlobalState} />

          {window.location.pathname === "/admin" ? <NavAdmin updateGlobalState={this.updateGlobalState} /> : <TopNav updateGlobalState={this.updateGlobalState}/>}
          <TopNav cartItems={this.state.cartItems}></TopNav>
          {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
          <div id="CWClogo">
            <img src="reverseLogo.png" width="150" height="176" />
          </div>
          <MyCarousel />
          <div className="wrapper">
            <div className="scroll" id="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" render={() => (<Admin updateGlobalState={this.updateGlobalState} /> )} />
                <Route exact path="/wines" component={Wines} />
                <Route exact path="/admin" render={() => (<Login updateGlobalState={this.updateGlobalState} /> )} />
                <Route exact path="/wines" render={() => (<Wines onAddToCart = {this.handleAddToCart} />)} />
                <Route exact path="/wine/:id" render={(routeProps) => (<WineDetails onAddToCart = {this.handleAddToCart} {...routeProps}/>)} />
                <Route exact path="/cart" render={() => (<Cart cartItems = {this.state.cartItems} />)} /> 
                <Route exact path="/producers" component={OurProducers} />
                <Route exact path="/faqs" component={FAQs} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
          <div id="footer">
            <BottomNav></BottomNav>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;