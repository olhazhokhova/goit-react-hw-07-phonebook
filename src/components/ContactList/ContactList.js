import React from 'react';
import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { useDeleteContactMutation } from 'redux/contacts';

const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  const filter = useSelector(state => state.filter.value);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={`${s.list} ${s.scrollbar}`}>
      {filterContacts.map(({ id, name, phone }) => {
        return (
          <li key={id} className={s.item}>
            <span>
              {name}: {phone}
            </span>
            <button className={s.button} onClick={() => deleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
