import { createContext } from 'react';

const ContactContext = createContext({
    contact: {name: 'Mike', Phone:'1231231234'},
    setContact: () =>{},
    contacts: [
        {id:1 , name: 'mike',  phone:'1231231234'},
        {id:2 , name: 'kevin', phone:'0980987654'},
        {id:3 , name: 'emily', phone:'12309873456'}
    ]

})


export default ContactContext;