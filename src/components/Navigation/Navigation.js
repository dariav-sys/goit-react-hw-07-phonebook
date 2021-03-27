import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './Navigation.module.css';
import { getIsAuthenticated } from '../../redux/auth';

export default function Navigation() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div>
      <NavLink to="/" exact className={navLink} activeClassName={activeNavLink}>
        Home
      </NavLink>
      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={navLink}
          activeClassName={activeNavLink}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}
