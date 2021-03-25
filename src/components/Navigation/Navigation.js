import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navLink, activeNavLink } from './Navigation.module.css';
import { getIsAuthenticated } from '../../redux/auth';

const Navigation = ({ isAuthenticated }) => {
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
};
const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
