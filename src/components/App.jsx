import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';

import { Wrapper } from './App.module';

export const App = () => {
  return (
    <Wrapper>
      <h2>Phonebook</h2>
      <ContactForm />
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Wrapper>
  );
};
