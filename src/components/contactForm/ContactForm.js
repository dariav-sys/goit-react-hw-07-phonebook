import React, { Component } from 'react';
import styles from './ContactForm.module.css';

import shortid from 'shortid';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebook.actions';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.name || !this.state.number) return;
    this.props.onSubmit({
      id: shortid.generate(),
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label>
          <input
            className={styles.data_input}
            placeholder="Name:"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          <input
            className={styles.data_input}
            placeholder="Number:"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
        </label>
        <button className={styles.add_button} type="submit">
          ADD
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
