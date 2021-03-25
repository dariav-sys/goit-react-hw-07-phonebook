import React, { Component } from 'react';
import { connect } from 'react-redux';
import { register } from '../../redux/auth';
import { form, label, button, input } from './Register.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit} className={form}>
          <label className={label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className={input}
            />
          </label>

          <label className={label}>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              className={input}
              placeholder="name@email.com"
            />
          </label>

          <label className={label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              className={input}
              placeholder="*********"
            />
          </label>

          <button type="submit" className={button}>
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: register,
};

export default connect(null, mapDispatchToProps)(RegisterView);
