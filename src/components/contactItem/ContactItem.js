import React from 'react';
import styles from './ContactItem.module.css';
import { connect } from 'react-redux';

import { deleteContact } from '../../redux/phonebook';

const ContactItem = ({ filtered, onDelete }) => {
  return filtered.map(({ name, number, id }) => {
    return (
      <li className={styles.contact} name={name} key={id}>
        <div className={styles.button}>
          <button type="button" onClick={() => onDelete(id)}>
            X
          </button>
        </div>
        {name} : {number}
      </li>
    );
  });
};

const mapDispatchToProps = {
  onDelete: deleteContact,
};

export default connect(null, mapDispatchToProps)(ContactItem);
