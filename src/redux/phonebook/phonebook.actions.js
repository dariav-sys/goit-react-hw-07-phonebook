import { createAction, nanoid } from '@reduxjs/toolkit';
import { ADD_CONTACT, DELETE_CONTACT, CHANGE_FILTER } from './phonebook.types';

const addContact = createAction(ADD_CONTACT, ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction(DELETE_CONTACT);
const changeFilter = createAction(CHANGE_FILTER);

export { addContact, deleteContact, changeFilter };
