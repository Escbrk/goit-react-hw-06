import { FaPhone } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contacts = ({ value }) => {
  const dispatch = useDispatch();
  const { name, number, id } = value;
  return (
    <>
      <div>
        <p>
          <RiContactsFill />
          {name}
        </p>
        <p>
          <FaPhone />
          {number}
        </p>
      </div>
      <button
        onClick={() => {
          dispatch(deleteContact(id));
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contacts;
