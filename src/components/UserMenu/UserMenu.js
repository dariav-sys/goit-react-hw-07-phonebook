import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUsername, logOut } from '../../redux/auth';
import { usermenuCont, userName, button } from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUsername);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, [dispatch]);
  return (
    <div className={usermenuCont}>
      <span className={userName}>{name}, welcome to The Phonebook! </span>
      <button type="button" onClick={onLogOut} className={button}>
        Log out
      </button>
    </div>
  );
}
