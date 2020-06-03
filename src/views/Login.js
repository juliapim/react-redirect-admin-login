import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      userName: "juliapim",
      password: 12345,
    };
  }

  handleInputs = (e) => {
    e.preventDefault();
    if ((this.state.userName === 'juliapim')||(this.state.password === 12345)) {
      this.setState({ success: true, errors: "" });
    } else{
        this.setState({ errors: "please try again" });
    }
    
  };
  render() {
      
    if (this.state.success) {
      return <Redirect to="/secret"></Redirect>;
    }
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleInputs}>
          <div>
            <label htmlFor="text">Username</label>
            <input
              type="text"
              onChange={(e) => this.setState({ userName: e.target.value })}
            />
          </div>
          <div>
           
            <label htmlFor="number">Password</label>
            <input
              type="number"
              onChange={(e) => this.setState({ password: e.target.value })}
            />
          </div>

          <button>GO</button>
          <div className="errors">{this.state.errors}</div>
        </form>
      </div>
    );
  }
}

export default Login;
