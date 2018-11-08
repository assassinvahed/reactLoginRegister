import React, { Component } from 'react'
import axios from 'axios';

export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      passwordConfirm: '',
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
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios.post('/auth/register', newUser)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
        <div style={{width: 90}}>
          <form onSubmit={this.onSubmit}>
            <input type="text" name="name" placeholder="Name" required value={this.state.name} onChange={this.onChange} />
            <input type="email" name="email" placeholder="Email Address" required value={this.state.email} onChange={this.onChange} />
            <input type="password" name="password" placeholder="Password" required value={this.state.password} onChange={this.onChange} />
            <input type="password" name="passwordConfirm" placeholder="Confirm password" required value={this.state.passwordConfirm} onChange={this.onChange} />
            <button tpye="submit">Register</button>
          </form>
        </div>
      </div>
    )
  }
}
