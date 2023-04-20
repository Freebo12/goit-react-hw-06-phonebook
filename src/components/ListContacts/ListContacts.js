import { ListElem } from '../ListElem/ListElem';
import { ListContactsStyle } from './ListContacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, GetFilter } from '../Redux/selectors';

export const ListContacts = () => {
  const filter = useSelector(GetFilter);
  const contacts = useSelector(getContacts);

  const getValidContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getValidContacts();

  if (contacts.length !== 0) {
    return (
      <ListContactsStyle>
        {visibleContacts.map(contact => {
          return <ListElem key={contact.id} contact={contact} />;
        })}
      </ListContactsStyle>
    );
  }
};
