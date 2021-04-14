import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    formData: null
  };

  handleChange = (e) => {
    //grab form data and set it to state
  };

  handleSubmit = (e) => {
    // submit it to backend to receive token
  };

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
