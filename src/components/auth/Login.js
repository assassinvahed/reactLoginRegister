import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      email: this.state.email,
      password: this.state.password
    };

    axios.post('/auth/login', newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div style={{width: 90}}>
          <form onSubmit={this.onSubmit}>
            <input type="email" name="email" placeholder="Email Address" required value={this.state.email} onChange={this.onChange} />
            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
            <button tpye="submit">Login</button>
          </form>
        </div>
      </div>
    )
  }
}
