import React from 'react';
import axios from 'axios';

class Login extends React.Component {
  state = {
    formData: null
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value }
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8080/api/users/login', this.state.formData)
      .then((res) => {
        sessionStorage.setItem('token', res.data.token);
        this.props.history.push('/');
      })
      .catch((error) => alert(error));
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
