import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

import { ListWrapper } from './ContactList.styled';
const ContactList = () => {
  const contacts = useSelector(state => state.contacts.value);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });
    return result;
  };

  const contactItem = getFilteredContacts().map(({ id, name, number }) => (
    <li key={id}>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </button>
    </li>
  ));
  return (
    <ListWrapper>
      <ul>{contactItem}</ul>
    </ListWrapper>
  );
};

export default ContactList;
