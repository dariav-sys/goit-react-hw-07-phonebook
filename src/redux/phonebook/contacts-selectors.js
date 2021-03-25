import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFiltered = state => state.contacts.filter;
const getAllContactsItems = state => state.contacts.items;
const getErrorMessage = state => state.contacts.error;

const getVisibleContacts = createSelector(
  [getAllContactsItems, getFiltered],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  },
);

export {
  getLoading,
  getFiltered,
  getAllContactsItems,
  getErrorMessage,
  getVisibleContacts,
};
