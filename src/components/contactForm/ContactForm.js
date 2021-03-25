import React, { Component } from 'react';
import styles from './ContactForm.module.css';

import { connect } from 'react-redux';
import { getAllContactsItems, addContact } from '../../redux/phonebook';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onHandleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (!name || !number) return;
    this.props.onSubmit({
      name,
      number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.onHandleSubmit}>
        <label>
          <input
            className={styles.input}
            placeholder="Name:"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onHandleChange}
          ></input>
        </label>
        <label>
          <input
            className={styles.input}
            placeholder="Number:"
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.onHandleChange}
          ></input>
        </label>
        <button className={styles.button} type="submit">
          ADD
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onSubmit: addContact,
};

const mapStateToProps = state => ({
  contacts: getAllContactsItems(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
