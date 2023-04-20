// import PropTypes from 'prop-types';
import { BtnDelete } from './ListElem.stlyed';
import { deleteContact } from '../Redux/contactsSlice';
import { useDispatch } from 'react-redux';

export const ListElem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <>
      <li>
        <span>
          {contact.name}:{contact.number}
        </span>
        <BtnDelete type="button" onClick={handleDelete}>
          Delete
        </BtnDelete>
      </li>
    </>
  );
};
