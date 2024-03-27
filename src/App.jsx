import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";


const App = () => {
  // const [contactList, setContactList] = useState(() => {
  //   const savedData = localStorage.getItem("data");

  //   return savedData !== null ? JSON.parse(savedData) : contacts;
  // });
  // const [filter, setFilter] = useState("");

  // const addContact = (newContact) => {
  //   setContactList((prevContacts) => {
  //     return [...prevContacts, newContact];
  //   });
  // };
  // const deleteContact = (id) => {
  //   setContactList((prevContacts) => {
  //     return prevContacts.filter((contact) => contact.id !== id);
  //   });
  // };

  // const filteredContacts = contactList.filter((filtered) =>
  //   filtered.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
