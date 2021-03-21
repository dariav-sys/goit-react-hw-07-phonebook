import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, changeFilter } from './phonebook.actions';

const removeContactItem = (state, action) => {
  const index = state.findIndex(item => item.id === action.payload);
  return [...state.slice(0, index), ...state.slice(index + 1)];
};

const addContactItem = (state, action) => [...state, action.payload];

const items = createReducer([], {
  [addContact]: addContactItem,
  [deleteContact]: removeContactItem,
});

const filter = createReducer('', {
  [changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
