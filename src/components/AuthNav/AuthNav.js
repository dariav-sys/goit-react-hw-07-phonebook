import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './AuthNav.module.css';

class AuthNav extends Component {
  render() {
    return (
      <div>
        <NavLink
          to="/register"
          exact
          className={navLink}
          activeClassName={activeNavLink}
        >
          Register
        </NavLink>
        <NavLink
          to="/login"
          exact
          className={navLink}
          activeClassName={activeNavLink}
        >
          Log in
        </NavLink>
      </div>
    );
  }
}

export default AuthNav;
