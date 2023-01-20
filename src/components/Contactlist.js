import React from 'react'
import ContactCard from './ContactCard';


const Contactlist = (props) =>{
    console.log(props);//parameters passing props above line
        const deleteContactHandler = (id) => {
            props.getContactId(id);
        }
    const renderContactList = props.contacts.map((contact) => {

        return (

           <ContactCard contact={contact} clickHandler={deleteContactHandler} key=  {contact.id} ></ContactCard>
        );

    });

    return <div className='ui called list'>
         <h2>Contact List</h2>
         {renderContactList}
     </div>
}

export default Contactlist