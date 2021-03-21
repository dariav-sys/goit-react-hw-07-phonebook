import React, { Component } from 'react';

import { connect } from 'react-redux';

import ContactForm from './components/contactForm';
import Filter from './components/filter';
import ContactItem from './components/contactItem/ContactItem';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="header">The Phonebook</h1>
        <ContactForm />
        <Filter />
        <ul className="contacts">
          <ContactItem filtered={this.props.contacts} />
        </ul>
      </div>
    );
  }
}

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getFilteredContacts(items, filter);
  return {
    contacts: visibleContacts,
    filter,
    isContactIncludes: items.length > 0,
  };
};

export default connect(mapStateToProps)(App);
