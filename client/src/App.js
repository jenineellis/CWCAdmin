import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import NavAdmin from "./components/Admin/NavAdmin";
import Login from './pages/Admin';
// import MyCarousel from "./components/Carousel";

class App extends React.Component {
  state = {
    User: null
  }
  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state))
  }
  render() {
    return (
      <Router>
        <div>
          {window.location.pathname === "/admin" ? <NavAdmin /> : <Nav />}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin" render={() => <Login updateGlobalState={this.updateGlobalState} />} />
            <Route exact path="/books" component={Books} />
            <Route exact path="/books/:id" component={Detail} />
            <Route exact path="/wines" component={Wines} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}


export default App;