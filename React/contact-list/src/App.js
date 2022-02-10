import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import {Header} from "./Components/Header"
import {AddContact} from "./Components/AddContact"
import {ContactList} from "./Components/ContactList"



function App() {
  // useEffect(()=>{
  //   localStorage.setItem("todos",JSON.stringify(contact))
  // },[])
  const [contacts,setContacts] = useState([])

  // const addContacts = (Name,Email)=>{

    const addContactHandler = (contact) =>{
      setContacts([...contacts,contact])
    }
    
  



  return (
    <div className="ui container">
       <Header />
       <AddContact  addContactHandler={addContactHandler}/>
       <ContactList contacts={contacts}/>
      
  
    </div>
  );
}

export default App;
