import  { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactContext from '../context/ContactContext';

const ContactList = () => {
    const { contacts, setContact } = useContext(ContactContext);
    const navigate = useNavigate();
  
    const handleContactClick = (contact) => {
      setContact(contact);
      navigate('/details');
    };
  
    return (
      <div>
        <h2>Contact List</h2>
        <ul>
          {contacts.map(contact => (
            <li key={contact.id} onClick={() => handleContactClick(contact)}>
              {contact.name}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ContactList;