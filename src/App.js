import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./views/Login";
import Secret from "./views/Secret";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={Login}></Route>
        <Route path="/secret" component={Secret}></Route>
      </header>
    </div>
  );
}

export default App;
