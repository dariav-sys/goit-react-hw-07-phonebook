import React from 'react';
import { connect } from 'react-redux';

import { getUsername, logOut } from '../../redux/auth';
import { usermenuCont, userName, button } from './UserMenu.module.css';

const UserMenu = ({ name, logOut }) => {
  return (
    <div className={usermenuCont}>
      <span className={userName}>{name}, welcome to The Phonebook! </span>
      <button type="button" onClick={logOut} className={button}>
        Log out
      </button>
    </div>
  );
};

const mapStateToProps = state => ({
  name: getUsername(state),
});

const mapDispatchToProps = {
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
