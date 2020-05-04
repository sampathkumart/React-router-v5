import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

function route() {
  return <h2>Route</h2>;
}

function route2() {
  return <h2>Route2</h2>;
}
const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Route</Link> <Link to="/two">Route2</Link>
      </nav>
      <Switch>
        <Route path="/two" component={route2} />
        <Route path="/" component={route} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
