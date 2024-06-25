import React, { useContext } from 'react';
import ContactContext from '../context/ContactContext';
import { useNavigate } from 'react-router-dom';

const ContactDetails = () => {
    const { contact } = useContext(ContactContext);
    const navigate = useNavigate();
  
    if (!contact || !contact.name) {
      return (
        <div>
          <h2>Contact Details</h2>
          <p>Please select a contact to see details.</p>
        </div>
      );
    }
  
    return (
      <div>
        <h2>Contact Details</h2>
        <p>Name: {contact.name}</p>
        <p>Phone: {contact.phone}</p>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  };
  
  export default ContactDetails;