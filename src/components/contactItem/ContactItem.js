import React from 'react';
import styles from './ContactItem.module.css';
import { connect } from 'react-redux';

import { phonebookOperations } from '../../redux/phonebook';

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

const mapDispatchToProps = {
  onDelete: phonebookOperations.deleteContact,
};

export default connect(null, mapDispatchToProps)(ContactItem);
