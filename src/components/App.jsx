import { useFetchContactsQuery } from 'redux/contacts';
import './App.css';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import Filter from './Filter';
import Spinner from './Spinner';

const App = () => {
  const { data: contacts,  isFetching } = useFetchContactsQuery();

  return (
    <div className="app-content">
      <h1>Phonebook</h1>
      <AddContacts contacts={contacts} />

      {isFetching && <Spinner />}
      
      {contacts && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList contacts={contacts} />
        </>
      )}

    </div>
  );
};

export default App;