import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const value = useSelector(getFilteredContacts);

  const getFilteredNames = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(value)
    );
  };

  let searchContact = value === '' ? contacts : getFilteredNames();

  return (
    <div>
      {searchContact.map(({ id, number, name }) => {
        return <ContactListItem key={id} id={id} name={name} number={number} />;
      })}
    </div>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;
