// import { useDispatch } from 'react-redux';

import Header from 'components/Header';
import Section from 'components/Section';
import Form from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import { fetchContacts } from 'redux/operations';
// import { useLocalStorage } from 'hooks/useLocalStorage';
import 'styles/shared.scss';

const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', initialContacts);

  return (
    <div className="App">
      <Header title={'PhoneBook'}>
        <Filter />
      </Header>
      <Section title={'Contacts'}>
        <Form />
        <ContactList />
      </Section>
    </div>
  );
};

export default App;

// const [contacts, setContacts] = useState(
//   JSON.parse(window.localStorage.getItem('contacts:')) ?? initialContacts,
// );
// const [filter, setFilter] = useState('');

// useEffect(() => {
//   window.localStorage.setItem('contacts:', JSON.stringify(contacts));
// }, [contacts]);
