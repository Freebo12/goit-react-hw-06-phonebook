import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ListContacts } from './ListContacts/ListContacts';

// const getContactsLocal = () => {
//   const saveContacts = localStorage.getItem('contacts');
//   if (saveContacts !== null) {
//     const parsedContacts = JSON.parse(saveContacts);
//     return parsedContacts;
//   }
//   return [];
// };

// export const App = () => {
//   const appState = {
//     contacts: [],
//     filter: '',
//   };

//   const rootReducer = (state = appState, action) => {
//     return state;
//   };

//   console.log(rootReducer());

//   const [contacts, setContacts] = useState(getContactsLocal);
//   const [filter, setFilter] = useState('');

//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   }, [contacts]);

//   const addContact = ({ name, number }) => {
//     const contact = {
//       name,
//       number,
//       id: nanoid(),
//     };

//     contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
//       ? alert(`${contact.name} Is already in contacts`)
//       : setContacts(prevState => [...prevState, contact]);
//     console.log(contacts);
//   };

//   const getContacts = () => {
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   const changeFilter = e => {
//     setFilter(e.currentTarget.value);
//   };

//   const deleteContact = contactid => {
//     setContacts(prevState =>
//       prevState.filter(contact => contact.id !== contactid)
//     );
//   };

//   const visibleContacts = getContacts();
//   return (
//     <>
//       <Section title={'Phonebook'}>
//         <PhoneBook onSabmit={addContact} />
//       </Section>

//       <Section title={'Contacts'}>
//         <SearchFilter onChange={changeFilter} />
//         <ListContacts
//           contacts={visibleContacts}
//           onDelete={deleteContact}
//           id={nanoid}
//         />
//       </Section>
//     </>
//   );
// };

import { useSelector } from 'react-redux';

export const App = () => {
  return (
    <>
      <Section title={'Phonebook'}>
        <PhoneBook />
      </Section>

      <Section title={'Contacts'}>
        <SearchFilter />
        <ListContacts />
      </Section>
    </>
  );
};
