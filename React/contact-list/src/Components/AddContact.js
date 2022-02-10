import React, { useState, useEffect } from 'react';

export const AddContact = ({ addContactHandler }) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const add = (e) => {

        e.preventDefault();
        if (!name || !email) {
            alert("Name and Email should not be blank")
            return;
        }
        else {
            addContactHandler(name, email)
            setEmail("")
            setName("")
            console.log("name---->", name, email)
        }
    }


    return (<div className='ui fixed main'>
        <h2>Add Contact</h2>

        <form className='ui form' onSubmit={add}>

            <div className='field'>
                <label>Name</label>
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />

            </div>
            <div className='field'>
                <label>Email</label>
                <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />

            </div>
            <button className='ui button blue'>Add</button>
        </form>
    </div>);
};
