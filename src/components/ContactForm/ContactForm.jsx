import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';

import { useState } from 'react';

import { InptuWrapper } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (isDublicate(name)) {
      alert('Contact already exists');
      return;
    }
    dispatch(addContact(name, number));
    setName('');
    setNumber('');
  };

  const isDublicate = name => {
    const normalizedName = name.toLowerCase();
    const result = contacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });

    return Boolean(result);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`no field name - ${name}`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InptuWrapper>
          <label> Name</label>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
          <label> Number</label>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />

          <button type="submit"> Add contact</button>
        </InptuWrapper>
      </form>
    </div>
  );
};

export default ContactForm;

/*
class ContactForm extends Component {
  state = { name: '', number: '' };

  handleSubmit = e => {
    e.preventDefault();
    const result = this.props.onSubmit(this.state);
    if (result) {
      this.setState({ name: '', number: '' });
    }
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { name, number } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <InptuWrapper>
            <label> Name</label>
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={handleChange}
            />
            <label> Number</label>
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={handleChange}
            />

            <button type="submit"> Add contact</button>
          </InptuWrapper>
        </form>
      </div>
    );
  }
}
*/
