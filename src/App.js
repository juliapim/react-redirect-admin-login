import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form autoComplete="off" className="form-login">
          <fieldset>
            <legend>Login</legend>
            <div class="login-details">
              <input type="text" name="username" placeholder="Username..." />
              <input type="password" name="password" placeholder="Password..." />
              <button type="submit">Get in now</button>
            </div>
          </fieldset>
        </form>
      </header>
    </div>
  );
}

export default App;
