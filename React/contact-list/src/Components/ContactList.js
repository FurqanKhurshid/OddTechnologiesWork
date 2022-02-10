import React from 'react'
// import { AddContact } from './AddContact';
import { ContactCard } from './ContactCard';

export const ContactList = ({contacts}) => {
    console.log("props--->",contacts)
    const RenderContactList = contacts.map((contact) => {
        return (
            <>
            <ContactCard contact={contact}/>
            

            </>

            //    <div>{ contact.name} </div>
            //    <div>{ contact.name} </div>
        )
    })
    return (
        <>
            <div className='ui celled list'>
                {RenderContactList}
            </div>
        </>
    )












};
