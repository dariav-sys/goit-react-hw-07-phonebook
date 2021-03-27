import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={navLink}
        activeClassName={activeNavLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={navLink}
        activeClassName={activeNavLink}
      >
        Sign in
      </NavLink>
    </div>
  );
}
