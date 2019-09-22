import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import WineDetails from "./pages/WineDetails";
import MyCarousel from "./components/Carousel";
import NavAdmin from "./components/Admin/NavAdmin";
import Login from "./pages/Admin";


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
      <div>

        {window.location.pathname === "/admin" ? <NavAdmin /> : <span></span>}
        <MyCarousel />
        <div className="wrapper">
          <div className="scroll" id="container">
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/admin" render={() => <Admin updateGlobalState={this.updateGlobalState} />} />
                <Route exact path="/wines" component={Wines} />
                <Route exact path="/wine/:id" component={WineDetails} />
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
