import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './pages/Admin';
import NoMatch from './pages/NoMatch';
import NavBar from './components/Nav';



class App extends React.Component {
  state = {
    User: null,
    loggedIn: false,
    showModal: false,
    loginError: "",
  };

  updateGlobalState = (name, val) => {
    this.setState({ [name]: val }, () => console.log(this.state));
  };

  getGlobalState = (name) => {
    return this.state[name];
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/admin" render={() => (<Login updateGlobalState={this.updateGlobalState} getGlobalState={this.getGlobalState} />)} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
