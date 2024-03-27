import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);
  const filteredList = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <ul>
      {filteredList.map((filteredContact) => {
        return (
          <li key={filteredContact.id}>
            <Contact value={filteredContact} />
          </li>
        );
      })}
    </ul>
  );
}
