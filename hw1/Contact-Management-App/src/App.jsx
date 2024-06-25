import{ useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


// internal
import ContactContext from './context/ContactContext';
import ContactList from './components/ContactList';
import ContactDetails from './components/ContactDetails';

const App = () => {
  const [contacts] = useState([
    {id:1 , name: 'mike',  phone:'1231231234'},
    {id:2 , name: 'kevin', phone:'0980987654'},
    {id:3 , name: 'emily', phone:'12309873456'}
  ]);
  const [selectedContact, setSelectedContact] = useState(contacts[0]);

  return (
    <ContactContext.Provider value={{ contact: selectedContact, setContact: setSelectedContact, contacts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/details" element={<ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </ContactContext.Provider>
  );
};

export default App;