import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    loginSuccessful: false
  };

  handlCredentialChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.username === 'admin' && this.state.password === 'admin123') {
      this.setState({ loginSuccessful: true, errors: '' });
    } else {
      this.setState({ errors: 'Credentials are not correct' });
    }
  };

  render() {
    // redirect in case the login credentials were correct
    if (this.state.loginSuccessful) {
      return <Redirect to="/secret" />;
    }

    return (
      <form onSubmit={this.handleSubmit} autoComplete="off" className="form-login">
        <fieldset>
          <legend>Login</legend>
          <div className="login-details">
            <input type="text" onChange={this.handlCredentialChange} name="username" placeholder="Username..." />
            <input type="password" onChange={this.handlCredentialChange} name="password" placeholder="Password..." />
            <button type="submit">Get in now</button>
          </div>
          <div className="errors">{this.state.errors}</div>
        </fieldset>
      </form>
    );
  }
}

export default LoginForm;
