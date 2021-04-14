import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
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
      <div className="signup">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <label>First Name:</label>
          <input type="text" name="first_name" />
          <label>Last Name:</label>
          <input type="text" name="last_name" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Address:</label>
          <input type="text" name="address" />
          <label>Phone Number:</label>
          <input type="text" name="phone" />
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
