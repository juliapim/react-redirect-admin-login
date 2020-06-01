import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Secret extends Component {
  
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="secret">
        <p>The secret admin area</p>
        <Link to="/">Back to Homepage</Link>
      </div>
    );
  }
}

export default Secret;
