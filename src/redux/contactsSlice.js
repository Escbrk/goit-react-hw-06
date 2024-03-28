import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const slice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload.contact);
      },
      prepare: (contact) => {
        return {
          payload: {
            contact: {
              ...contact,
              id: nanoid(4),
            },
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );

      // const deleteNumber = state.items.findIndex(
      //   (contact) => contact.id === action.payload
      // );
      // state.items.splice(deleteNumber, 1);
    },
  },
});

export const { addContact, deleteContact } = slice.actions;

export const selectContacts = (state) => state.contacts.items;

export default slice.reducer;
