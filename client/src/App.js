import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Wines from "./pages/Wines";
import NoMatch from "./pages/NoMatch";
import MyCarousel from "./components/Carousel";

function App() {
  return (
    <div>
      <MyCarousel />
      <div className="wrapper">
        <div className="scroll" id="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/books" component={Books} />
              <Route exact path="/books/:id" component={Detail} />
              <Route exact path="/wines" component={Wines} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
      </div>

    </div>
  );
}

export default App;
