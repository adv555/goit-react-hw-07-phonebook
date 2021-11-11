import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ImBin } from 'react-icons/im';
import { fetchContacts, deleteContact } from 'redux/operations';
import { getContacts } from 'redux/selectors';

import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <table className={s.contactList}>
      <tbody>
        {contacts.map(({ name, number, id }) => {
          return (
            <tr className={s.contactListItem} id={id} key={id}>
              <td className={s.name}>{name}</td>
              <td className={s.number}>{number}</td>
              <td className={s.contactBtn}>
                <button className={s.btn} type="button" onClick={() => dispatch(deleteContact(id))}>
                  <ImBin />
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// With import { connect } from 'react-redux';

/**
  const getFilterContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getFilterContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

 */
