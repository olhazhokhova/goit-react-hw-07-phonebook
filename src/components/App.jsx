import { useSelector } from 'react-redux';
import './App.css';
import AddContacts from './AddContacts';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const contacts = useSelector(state => state.items.items);

  return (
    <div className="app-content">
        <h1>Phonebook</h1>
        <AddContacts />

        {contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
  );
};

export default App;