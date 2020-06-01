import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import LoginForm from './views/Login';
import Secret from './views/Secret';

function App() {
  
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={LoginForm}></Route>
            <Route path="/secret" component={Secret} ></Route>
            <Route path="*">
              <div>
                <div>Oops - this page does not exist</div>
                <Link to="/">Back to Login</Link>
              </div>
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
