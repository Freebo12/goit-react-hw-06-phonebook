import { Section } from './Section/Section';
import { PhoneBook } from './PhoneBook/PhoneBook';
import { SearchFilter } from './SearchFilter/SearchFilter';
import { ListContacts } from './ListContacts/ListContacts';

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
