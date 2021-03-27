import React, { useState } from 'react';
import styles from './ContactForm.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getAllContactsItems, addContact } from '../../redux/phonebook';

const initialState = {
  name: '',
  number: '',
};

export default function ContactForm() {
  const [user, setUser] = useState(initialState);
  const contacts = useSelector(getAllContactsItems);
  const dispatch = useDispatch();

  const onHandleChange = e => {
    const { name, value } = e.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    const found = contacts.find(contact => {
      return contact.name === user.name || contact.number === user.number;
    });
    if (found) return;

    // for (const contact in contacts) {
    //   if (contact.name === user.name || contact.number === user.number) {
    //     return;
    //   }
    // }

    dispatch(addContact(user));
    setUser(initialState);
  };

  return (
    <form className={styles.form} onSubmit={onHandleSubmit}>
      <label>
        <input
          className={styles.input}
          placeholder="Name:"
          type="text"
          name="name"
          value={user.name}
          onChange={onHandleChange}
        ></input>
      </label>
      <label>
        <input
          className={styles.input}
          placeholder="Number:"
          type="text"
          name="number"
          value={user.number}
          onChange={onHandleChange}
        ></input>
      </label>
      <button className={styles.button} type="submit">
        ADD
      </button>
    </form>
  );
}
