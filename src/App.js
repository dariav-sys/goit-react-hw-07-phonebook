import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import ContactForm from './components/contactForm';
import Filter from './components/filter';
import ContactItem from './components/contactItem/ContactItem';
import { phonebookSelectors, phonebookOperations } from './redux/phonebook';

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { error, isLoading, isContactIncluded } = this.props;
    return (
      <div className="container">
        <h1 className="header">The Phonebook</h1>
        <ContactForm />
        {error && <h2>{error}</h2>}

        {isLoading && <Loader className="loader" />}
        {isContactIncluded && (
          <>
            <Filter />
            <ul className="contacts">
              <ContactItem filtered={this.props.contacts} />
            </ul>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: phonebookSelectors.getFilteredContacts(state),
  filter: phonebookSelectors.getFiltered(state),
  isContactIncluded: state.contacts.items.length > 0,
  isLoading: phonebookSelectors.getLoading(state),
  error: phonebookSelectors.getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(phonebookOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
