import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { deleteContact } from 'redux/contactSlice';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.items.items);

  const filter = useSelector(state => state.filter.value);
  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={`${s.list} ${s.scrollbar}`}>
      {filterContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <span>
              {name}: {number}
            </span>
            <button
              className={s.button}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
