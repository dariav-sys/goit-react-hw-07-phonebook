import React from 'react';
import { connect } from 'react-redux';
import { getFiltered } from '../../redux/phonebook';
import { changeFilter } from '../../redux/phonebook/contacts-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <input
          className={styles.input}
          placeholder="Filter by:"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  value: getFiltered(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
