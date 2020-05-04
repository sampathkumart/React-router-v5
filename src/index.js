import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

function route() {
  return <h2>Route</h2>;
}

function route2() {
  return <h2>Route2</h2>;
}

const App = () => (
  <BrowserRouter>
    <div>
      <Route path="/" component={route} />
      <Route path="/two" component={route2} />
    </div>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
