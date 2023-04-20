import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
  contacts: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.contacts.some(contact => contact.name === action.payload.name)
        ) {
          alert(`${action.payload.name} is already in contacts`);
          return state;
        }
        state.contacts.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
    findContact(state, action) {
      state.filter = action.payload;
      console.log(action.payload);
    },
  },
});

export const { addContact, deleteContact, findContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
