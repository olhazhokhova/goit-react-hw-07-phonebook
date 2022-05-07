import React from 'react';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from 'react-icons/md';
import PropTypes from 'prop-types';
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
              <label className={s.label}>Name</label>
              <span className={s.value}>{name}</span>
              <label className={s.label}>Phone number</label>
              <span>{phone}</span>
            </span>
            <button className={s.button} onClick={() => deleteContact(id)}>
              <MdDeleteOutline size="16" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
