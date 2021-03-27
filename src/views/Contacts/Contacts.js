import React, { useEffect } from 'react';
import Loader from 'react-loader-spinner';
import ContactForm from '../../components/ContactForm/ContactForm';
import ContactsItem from '../../components/ContactItem/ContactItem';
import Filter from '../../components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  getLoading,
  getErrorMessage,
  fetchContacts,
  getIsContactList,
} from '../../redux/phonebook';
import {
  container,
  contactsCont,
  contactsList,
  loader,
} from './Contacts.module.css';

export default function Contacts() {
  const isAnyContactList = useSelector(getIsContactList);
  const isLoadingContacts = useSelector(getLoading);
  const error = useSelector(getErrorMessage);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={container}>
      <ContactForm />
      {error && <p className="error-message">{error}</p>}
      {isLoadingContacts && (
        <div>
          <Loader className={loader} />
        </div>
      )}
      {isAnyContactList && (
        <div className={contactsCont}>
          <Filter />
          <ul className={contactsList}>
            <ContactsItem />
          </ul>
        </div>
      )}
    </div>
  );
}
