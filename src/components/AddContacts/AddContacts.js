import React from 'react';
import { useAddContactMutation } from 'redux/contacts';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './AddContacts.module.css';
import 'react-toastify/dist/ReactToastify.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required(),
  phone: Yup.string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required(),
});

const AddContacts = ({ contacts }) => {
  const [addContact] = useAddContactMutation();

  const handleSubmit = (values, { resetForm }) => {
    const isContactExist = contacts.some(contact => {
      return contact.name.toLowerCase().includes(values.name.toLowerCase());
    });
    if (isContactExist) {
      toast.warn(`${values.name} is already in contacts`, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      resetForm();
      return;
    }
    addContact(values);
    resetForm();
  };

  return (
    <div className={s.formWrap}>
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form autoComplete="off">
          <ToastContainer />
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <div style={{ color: 'red', fontSize: '13px' }}>{msg}</div>}
          </ErrorMessage>
          <label htmlFor="name">Number</label>
          <Field type="tel" name="phone" />
          <ErrorMessage name="phone">
            {msg => <div style={{ color: 'red', fontSize: '13px' }}>{msg}</div>}
          </ErrorMessage>
          <button type="submit" className={s.button}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddContacts;

AddContacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      phone: PropTypes.string,
    })
  ),
};
