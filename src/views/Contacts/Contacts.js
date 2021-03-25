import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsItem from '../../components/ContactItem/ContactItem';
import Filter from '../../components/Filter/Filter';
import { connect } from 'react-redux';
import {
  getLoading,
  getErrorMessage,
  getVisibleContacts,
  fetchContacts,
} from '../../redux/phonebook';
import {
  container,
  contactsCont,
  contactsList,
  loader,
} from './Contacts.module.css';

class Contacts extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoadingContacts, isContactIncludes, error } = this.props;
    return (
      <div className={container}>
        <ContactForm />
        {error && <p className="error-message">{error}</p>}
        {isLoadingContacts && (
          <div>
            <Loader className={loader} />
          </div>
        )}
        {isContactIncludes && (
          <div className={contactsCont}>
            <Filter />
            <ul className={contactsList}>
              <ContactsItem filtered={this.props.contacts} />
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getVisibleContacts(state),
  isContactIncludes: state.contacts.items.length > 0,
  isLoadingContacts: getLoading(state),
  error: getErrorMessage(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
