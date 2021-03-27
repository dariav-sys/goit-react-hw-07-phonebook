import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFiltered } from '../../redux/phonebook';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import styles from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(getFiltered);
  return (
    <>
      <label>
        <input
          className={styles.input}
          placeholder="Start entering..."
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(changeFilter(e.target.value))}
        ></input>
      </label>
    </>
  );
}
