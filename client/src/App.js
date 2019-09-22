import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import tempWinesList from "./pages/tempWinesList";
import WineDetails from "./pages/WineDetails";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route exact path="/wines" component={Wines} />
          <Route exact path="/tempWineList" component={tempWinesList} />
          <Route exact path="/wine/:id" component={WineDetails} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
