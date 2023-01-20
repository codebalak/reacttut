import React,{ useState, useEffect } from "react";//useState is hook
import {BrowserRouter as Router , Routes,Switch,Route} from "react-router-dom"
import './App.css';
import { uuid } from "uuidv4";
import Header from './Header'; 
import AddContact from './AddContact';
import Contactlist from './Contactlist';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts, setContacts] = useState([]);
  const addContactHandler = (contact) =>{
      console.log(contact);
      setContacts([...contacts, {id: uuid(), ...contact }]);
  };

          const removeContactHandler = (id) => {

            const newContactList = contacts.filter((contact) => {
              return contact.id !== id;
            });
                  setContacts(newContactList);
          }


  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

    if(retrieveContacts){
      setContacts(retrieveContacts);
    }
  },[]);

    useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    },[contacts]);

  return (

    

    <div className='ui container'>
      <Router>
      <Header/>
      <Route path="/add" component={AddContact}/>
      <Route path="/" exact component={Contactlist}/>

              <AddContact  addContactHandler={addContactHandler} />
      <Contactlist contacts={contacts} getContactId={removeContactHandler} />
      </Router>
    </div>
  );
}

export default App;
