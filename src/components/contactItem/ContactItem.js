import React from 'react';
import styles from './ContactItem.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebook.actions';

const ContactItem = ({ filtered, onDelete }) => {
  return filtered.map(({ name, number, id }) => {
    return (
      <li className={styles.contact} name={name} key={id}>
        <button
          className={styles.button}
          type="button"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
        {name} : {number}
      </li>
    );
  });
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactItem);
