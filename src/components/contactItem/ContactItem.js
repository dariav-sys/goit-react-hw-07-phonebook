import React from 'react';
import styles from './ContactItem.module.css';
import { useDispatch, useSelector } from 'react-redux';

import { deleteContact, getVisibleContacts } from '../../redux/phonebook';

export default function ContactItem() {
  const filtered = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  return filtered.map(({ name, number, id }) => {
    return (
      <li className={styles.contact} name={name} key={id}>
        <div className={styles.button}>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            X
          </button>
        </div>
        {name} : {number}
      </li>
    );
  });
}
