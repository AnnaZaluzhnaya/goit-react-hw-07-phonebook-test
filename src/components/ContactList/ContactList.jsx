import React from 'react';
import ContactListItem from 'components/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'redux/contactsApiSlice';

const ContactList = () => {
  // const contacts = useSelector(state => state.contacts.items);
  const valueFilter = useSelector(getFilteredContacts);
  const data = useFetchContactsQuery();
  console.log(data);

  const getFilteredNames = () => {
    const normalizedFilter = valueFilter.toLowerCase();
    return data.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  // };
  //   return data.filter(contact =>
  //     contact.name.toLowerCase().includes(valueFilter.toLowerCase())
  //   );
  // };

  let renderContact = valueFilter === '' ? data : getFilteredNames();

  return (
    <div>
      {data &&
        renderContact.map(({ id, number, name }) => {
          return (
            <ContactListItem key={id} id={id} name={name} number={number} />
          );
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
