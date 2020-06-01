import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <form autoComplete="off">
          <input type="text" name="username" placeholder="Username..." />
          <input type="password" name="password" placeholder="Password..." />
          <button type="submit">Login</button>
        </form>
      </header>
    </div>
  );
}

export default App;
