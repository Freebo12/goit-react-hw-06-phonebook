import { FilterSearch, SearchBox } from './SearchFilter.styled';
import { findContact } from 'components/Redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const SearchFilter = ({ value }) => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(findContact(e.currentTarget.value));
  };

  return (
    <SearchBox>
      <label name="filter"></label>
      <FilterSearch
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Search Contact"
      ></FilterSearch>
    </SearchBox>
  );
};
