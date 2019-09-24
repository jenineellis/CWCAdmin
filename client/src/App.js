import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import WineDetails from "./pages/WineDetails";
import MyCarousel from "./components/Carousel";
import NavAdmin from "./components/Admin/NavAdmin";
import Admin from "./pages/Admin";

import Login from "./pages/Admin";
import TopNav from "./components/TopNav";
import BottomNav from "./components/BottomNav";
import OurProducers from "./pages/OurProducers";
import FAQs from "./pages/FAQs";

class App extends React.Component {
  state = {
    User: null,
    loggedIn: false
  }

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state));
  };

  render() {
    return (
      <Router>
        <div>
          <TopNav></TopNav>
          {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
          <div id="CWClogo">
            <img src="reverseLogo.png" width="150" height="176" />
          </div>
          <MyCarousel />
          <div className="wrapper">
            <div className="scroll" id="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" render={() => <Admin updateGlobalState={this.updateGlobalState} />} />
                <Route exact path="/wines" component={Wines} />
                <Route exact path="/producers" component={OurProducers} />
                <Route exact path="/faqs" component={FAQs} />
                <Route exact path="/wine/:id" component={WineDetails} />
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
