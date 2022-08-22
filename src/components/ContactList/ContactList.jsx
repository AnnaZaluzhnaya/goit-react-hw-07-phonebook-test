import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import { useFetchContactsQuery } from 'redux/contactsApiSlice';
import PropTypes from 'prop-types';

const ContactList = () => {
  const value = useSelector(getFilteredContacts);
  const { data = [] } = useFetchContactsQuery();

  const getFilteredNames = () => {
    const normalizedValue = value.toLowerCase().trim();
    return data.filter(contact =>
      contact.name.toLowerCase().includes(normalizedValue)
    );
  };

  let searchContact = value === '' ? data : getFilteredNames();

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
