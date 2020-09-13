import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { routes } from "./components/routes";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={routes} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
